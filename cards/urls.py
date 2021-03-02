from django.urls import path
from .api import addCard

urlpatterns = [
    path('cards', addCard.as_view(), name="cards")
]
