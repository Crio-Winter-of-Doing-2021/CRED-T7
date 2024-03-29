from rest_framework import generics, permissions, serializers
from rest_framework.response import Response
from .serializers import CardSerializer, TransactionSerializer, payCardSerializer, SmartSerializer
from .models import Cards, Transactions
from rest_framework.views import APIView
from django.http import Http404
from django.shortcuts import get_object_or_404
from rest_framework.pagination import PageNumberPagination
from django.db.models import Sum,Count
import threading,time
from datetime import datetime,timedelta,date
from celery import shared_task 
from django.contrib.auth.models import User
from django.template.loader import render_to_string, get_template
from django.core.mail import EmailMessage,send_mail


class IsOwnerOrNot(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        # print(obj.owner, request.user)
        return obj.owner == request.user


class TransactionIsOwnerOrNot(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj.owner.owner == request.user


class CustomSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'


class addCard(generics.ListCreateAPIView):
    pagination_class = CustomSetPagination
    serializer_class = CardSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrNot]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        card = serializer.save(owner=self.request.user)
        return Response({
            'card': CardSerializer(card, context=self.get_serializer_context()).data,
        })

    def get_queryset(self):
        # print(self.request.user.cards.order_by('-id'))
        return self.request.user.cards.order_by('-id')


class viewCard(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrNot]

    def get_object(self, pk):
        try:
            card = Cards.objects.get(pk=pk)
            if(card.owner == self.request.user):
                return card
        except Cards.DoesNotExist:
            raise Http404
        raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = CardSerializer(snippet)
        return Response(serializer.data)


class addTransaction(generics.ListCreateAPIView):
    pagination_class = CustomSetPagination
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated, TransactionIsOwnerOrNot]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        card = get_object_or_404(self.request.user.cards, pk=self.kwargs['pk'])
        transaction = serializer.save(owner=card)
        card.credit += serializer.validated_data['amount']
        card.save()
        # print(card.credit, serializer.validated_data['amount'])
        return Response({
            'transaction': TransactionSerializer(transaction, context=self.get_serializer_context()).data,
        })

    def get_queryset(self):
        card = get_object_or_404(self.request.user.cards, pk=self.kwargs['pk'])
        if(len(self.kwargs['month'])<2):
            self.kwargs['month']= '0'+self.kwargs['month']
        return card.transactions.filter(year=str(self.kwargs['year']),month=str(self.kwargs['month']))


class viewTransaction(generics.ListAPIView):
    pagination_class = CustomSetPagination
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated, TransactionIsOwnerOrNot]

    def get_queryset(self):
        card = get_object_or_404(self.request.user.cards, pk=self.kwargs['pk'])
        # print(card.transactions.all())
        return card.transactions.all()


class payCard(generics.CreateAPIView):
    serializer_class = payCardSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        card = get_object_or_404(request.user.cards.all(), pk=kwargs['pk'])
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # print(request.data)
        if(serializer.validated_data['pay_amount'] > card.credit):
            raise serializers.ValidationError(
                'The payment should be less than or equal to what is to be paid.')

        card.credit -= serializer.validated_data['pay_amount']
        factor=1
        
        if (((date.today()-card.lastPayDate).days) <30) :
            if(card.credit==0):
                factor+=0.2
                if (serializer.validated_data['pay_amount']>=1000) :
                    factor+=0.2
            else:
                if (serializer.validated_data['pay_amount']>=1000) :
                    factor+=0.2
        else:
            factor=0

        card.rewards+= (float(serializer.validated_data['pay_amount']) * factor)//1
        card.lastPayDate=date.today()
        card.save()
        return Response({'Payment Billed': serializer.validated_data['pay_amount']})

@shared_task
def checkBillPayments():
    users = (User.objects.all())
    for user in users:
        cards = Cards.objects.filter(owner=user.pk)
        valid_cards= cards.filter(credit__gte="0.01",lastPayDate__lte=datetime.now()-timedelta(minutes=10))
        # print(valid_cards)
        if(valid_cards):
            subject = f'The cards bills are still pending!'
            from_send="shantanusingh1069@gmail.com"
            to_send=user.email
            context={"name":user.username,"valid_cards":valid_cards}
            message = get_template('html-message.html').render(context)
            msg = EmailMessage(
                subject,
                message,
                from_send,
                [to_send],
            )
            msg.content_subtype = "html"
            msg.send()
            print(msg)

# WAIT_TIME_SECONDS = 60

class smartstatements(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated, TransactionIsOwnerOrNot]
    serializer_class = SmartSerializer
    def get_queryset(self):
        card = get_object_or_404(self.request.user.cards, pk=self.kwargs['pk'])
        limit=min(10,len(card.transactions.all()))
        queryset=card.transactions.values('vendor').annotate(total=Count('pk'),total_amount=Sum('amount')).order_by('-total_amount')[:limit]
        return queryset

