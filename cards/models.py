from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError 

class Cards(models.Model):
    bank = models.CharField(max_length=200)
    card_number = models.CharField(max_length=16, unique=True)
    owner_name = models.CharField(max_length=200)
    cvv = models.CharField(max_length=3)
    expiry_date_month = models.CharField(max_length=2)
    expiry_date_year = models.CharField(max_length=4)
    # owner = models.ForeignKey(
    #     User, on_delete=models.CASCADE, related_name="cards")
