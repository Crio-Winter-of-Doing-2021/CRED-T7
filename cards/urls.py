from django.urls import path
from .api import addCard, addTransaction, viewCard, payCard

urlpatterns = [
    path('cards', addCard.as_view(), name="cards"),
    path('cards/<int:pk>', viewCard.as_view(), name="viewcards"),
    path('cards/<int:pk>/statements/<int:year>/<int:month>',
         addTransaction.as_view(), name="transactions"),
    path('cards/<int:pk>/pay', payCard.as_view(), name="paycard"),
]
