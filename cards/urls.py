from django.urls import path
from .api import addCard, addTransaction, viewTransaction, viewCard, payCard, smartstatements

urlpatterns = [
    path('cards', addCard.as_view(), name="cards"),
    path('cards/<int:pk>', viewCard.as_view(), name="viewcards"),
    path('cards/<int:pk>/statements/<int:year>/<int:month>',
         addTransaction.as_view(), name="transactions"),
    path('cards/<int:pk>/statements',
         viewTransaction.as_view(), name="view_transactions"),
    path('cards/<int:pk>/pay', payCard.as_view(), name="paycard"),
    path('cards/<int:pk>/smartstatements', smartstatements.as_view(), name="smartstatements"),
]
