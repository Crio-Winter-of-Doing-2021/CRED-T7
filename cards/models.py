from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from datetime import datetime,date
from django.core.validators import MinValueValidator

banks = (('SBI', 'SBI'), ('HDFC', 'HDFC'), ('Standard Chartered Bank', 'Standard Chartered Bank'), ('YES Bank', 'YES Bank'), ('Citibank', 'Citibank'), ('ICICI Bank', 'ICICI Bank'),
         ('American Express', 'American Express'), ('IndusInd Bank',
                                                    'IndusInd Bank'), ('RBL Bank', 'RBL Bank'), ('Allahabad Bank', 'Allahabad Bank'),
         ('Bajaj Finserv', 'Bajaj Finserv'), ('Andhra Bank', 'Andhra Bank'), ('Axis Bank', 'Axis Bank'), ('Bank of India', 'Bank of India'), ('Bank of Baroda', 'Bank of Baroda'), ('Bank of Maharashtra',
                                                                                                                                                                                    'Bank of Maharashtra'), ('Canara Bank', 'Canara Bank'), ('Central Bank of India', 'Central Bank of India'), ('DCB Bank', 'DCB Bank'), ('Federal Bank', 'Federal Bank'),
         ('HSBC Bank', 'HSBC Bank'), ('IDBI Bank', 'IDBI Bank'), ('Indian Bank', 'Indian Bank'), ('Kotak Mahindra Bank', 'Kotak Mahindra Bank'), ('Nainital Bank', 'Nainital Bank'), ('Punjab National Bank', 'Punjab National Bank'), ('Tata Capital', 'Tata Capital'), ('UCO Bank', 'UCO Bank'), ('Union Bank of India', 'Union Bank of India'), ('Vijaya Bank', 'Vijaya Bank'))


class Cards(models.Model):
    bank = models.CharField(max_length=200, null=False,
                            choices=banks)
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
    lastPayDate = models.DateField(auto_now_add=date.today)
    rewards = models.IntegerField(default=0)



class Transactions(models.Model):
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
