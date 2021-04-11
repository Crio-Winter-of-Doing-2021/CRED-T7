from django.urls import reverse
from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase,force_authenticate, APIClient
from rest_framework import status
from cards.models import *
class TestSetUp(APITestCase):

    def setUp(self):
        self.url = reverse("cards")
        self.url2 = reverse("transactions",kwargs={'pk':7, 'year':2021,'month':4})
        self.url3 = reverse("viewcards",kwargs={'pk':7})
        self.url4 = reverse("paycard",kwargs={'pk':7})

        self.username = "c"
        self.email = "c@c.com"
        self.password = "c"
        self.user = get_user_model().objects.create_user(self.username,self.password)
        return super().setUp()

    def tearDown(self):
        return super().tearDown()

class Test_pay(TestSetUp):


    def test_pay_validpay(self):
        self.client.force_authenticate(self.user)
        self.client.post(self.url,{"bank": "SBI",
            "card_number": "7873777590819548",
            "owner_name": "john",
            "cvv": "121",
            "expiry_date_month": "03",
            "expiry_date_year": "2023"}, format='json')
        # print("BEFORE")
        self.client.post(self.url2,{"vendor": "Fanta","amount": "32","CreditorDebit": "Debit","category": "Others"}, format='json')
        response=self.client.post(self.url4,{"pay_amount": "26"}, format='json')
        self.assertEqual(response.status_code, 200)
        response2=self.client.get(self.url3, format='json')
        self.assertEqual(response2.data["credit"], "6.00")
        self.assertEqual(response2.status_code, 200)

