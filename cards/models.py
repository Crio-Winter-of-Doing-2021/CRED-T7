from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from datetime import datetime
from django.core.validators import MinValueValidator


class Cards(models.Model):
    bank = models.CharField(max_length=200)
    card_number = models.CharField(max_length=16, unique=True, error_messages={
                                   'unique': "This card has already been added. Try another."})
    owner_name = models.CharField(max_length=200)
    cvv = models.CharField(max_length=3)
    expiry_date_month = models.CharField(max_length=2)
    expiry_date_year = models.CharField(max_length=4)
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="cards", null=True)
    credit = models.DecimalField(
        max_digits=19, decimal_places=2, auto_created=True, default=0.00,
        validators=[MinValueValidator(0.00)])


CREDIT = (
    ('Credit', 'Credit'),
    ('Debit', 'Debit'),
)
CAT = (
    ('Medical', 'Medical'),
    ('Groceries', 'Groceries'),
    ('Food', 'Food'),
    ('Entertainment', 'Entertainment'),
    ('Bills', 'Bills'),
    ('Others', 'Others'),
)


class Transactions(models.Model):
    amount = models.DecimalField(max_digits=19, decimal_places=2, validators=[
                                 MinValueValidator(float('0.01'))])
    vendor = models.CharField(max_length=200)
    CreditorDebit = models.CharField(max_length=200, choices=CREDIT)
    category = models.CharField(max_length=200, choices=CAT)
    cur_date = datetime.today().date()
    month = models.CharField(
        max_length=2, editable=False, default=str(cur_date)[5:7])
    year = models.CharField(max_length=4, editable=False,
                            default=str(cur_date)[0:4])
    owner = models.ForeignKey(
        Cards, on_delete=models.CASCADE, related_name="transactions", null=True)
