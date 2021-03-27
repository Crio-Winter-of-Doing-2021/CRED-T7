from rest_framework import generics, permissions, serializers
from rest_framework.response import Response
from .serializers import CardSerializer, TransactionSerializer, payCardSerializer
from .models import Cards, Transactions
from rest_framework.views import APIView
from django.http import Http404
from django.shortcuts import get_object_or_404
from rest_framework.pagination import PageNumberPagination


class IsOwnerOrNot(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        print(obj.owner, request.user)
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
        print(card.credit, serializer.validated_data['amount'])
        return Response({
            'transaction': TransactionSerializer(transaction, context=self.get_serializer_context()).data,
        })

    def get_queryset(self):
        card = get_object_or_404(self.request.user.cards, pk=self.kwargs['pk'])
        return card.transactions.all()


class viewTransaction(generics.ListAPIView):
    pagination_class = CustomSetPagination
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated, TransactionIsOwnerOrNot]

    def get_queryset(self):
        card = get_object_or_404(self.request.user.cards, pk=self.kwargs['pk'])
        print(card.transactions.all())
        return card.transactions.all()


class payCard(generics.CreateAPIView):
    serializer_class = payCardSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        card = get_object_or_404(request.user.cards.all(), pk=kwargs['pk'])
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        if(serializer.validated_data['pay_amount'] > card.credit):
            raise serializers.ValidationError(
                'The payment should be less than or equal to what is to be paid.')

        card.credit -= serializer.validated_data['pay_amount']
        card.save()
        return Response({'Payment Billed': serializer.validated_data['pay_amount']})
