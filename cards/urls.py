from django.urls import path
from .api import addCard, addTransaction, viewCard

urlpatterns = [
    path('cards', addCard.as_view(), name="cards"),
    path('cards/<int:pk>', viewCard.as_view(), name="viewcards"),
    path('cards/<int:pk>/transactions', addTransaction.as_view(), name="transactions")
]
