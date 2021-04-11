from django.urls import reverse
from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase,force_authenticate, APIClient
from rest_framework import status
from cards.models import *
class TestSetUp(APITestCase):

    def setUp(self):
        self.url = reverse("cards")
        self.url2 = reverse("transactions",kwargs={'pk':8, 'year':2021,'month':4})
        self.url3 = reverse("viewcards",kwargs={'pk':8})
        self.url4 = reverse("paycard",kwargs={'pk':8})

        self.username = "d"
        self.email = "d@snow.com"
        self.password = "d"
        self.user = get_user_model().objects.create_user(self.username,self.password)
        return super().setUp()

    def tearDown(self):
        return super().tearDown()

class Test_pay(TestSetUp):

    def test_pay_invalid(self):
        self.client.force_authenticate(self.user)
        self.client.post(self.url,{"bank": "SBI",
            "card_number": "2459783438451265",
            "owner_name": "john",
            "cvv": "798",
            "expiry_date_month": "12",
            "expiry_date_year": "2023"}, format='json')
        self.client.post(self.url2,{"vendor": "Limca","amount": "32","CreditorDebit": "Debit","category": "Others"}, format='json')
        response=self.client.post(self.url4,{"pay_amount": "36"}, format='json')
        self.assertEqual(response.status_code, 400)