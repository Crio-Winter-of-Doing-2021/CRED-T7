from rest_framework import generics, permissions
from rest_framework.response import Response
from .serializers import CardSerializer
from .models import Cards


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
