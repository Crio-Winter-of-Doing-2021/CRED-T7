from rest_framework import generics, permissions
from rest_framework.response import Response
from .serializers import CardSerializer, TransactionSerializer
from .models import Cards, Transactions
from rest_framework.views import APIView


class addCard(generics.ListCreateAPIView):
    serializer_class = CardSerializer
    # permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        card = serializer.save()
        return Response({
            'card': CardSerializer(card, context=self.get_serializer_context()).data,
        })

    def get_queryset(self):
        return Cards.objects.all()


class viewCard(APIView):
    def get_object(self, pk):
        try:
            return Cards.objects.get(pk=pk)
        except Cards.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = CardSerializer(snippet)
        return Response(serializer.data)


class addTransaction(generics.ListCreateAPIView):
    serializer_class = TransactionSerializer
    # permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        transaction = serializer.save()
        return Response({
            'transaction': TransactionSerializer(transaction, context=self.get_serializer_context()).data,
        })

    def get_queryset(self):
        return Transactions.objects.all()
