from django.urls import reverse
from cards.models import *
from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase,APIRequestFactory,force_authenticate, APIClient
from rest_framework import status
from cards.models import *
class TestSetUp(APITestCase):

    def setUp(self):
        self.url = reverse("cards")
        self.url2 = reverse("transactions",kwargs={'pk':11, 'year':2021,'month':4})
        self.url3 = reverse("view_transactions",kwargs={'pk':11})
        self.url4 = reverse("viewcards",kwargs={'pk':11})

        self.username = "john"
        self.email = "john@snow.com"
        self.password = "you_know_nothing"
        self.user = get_user_model().objects.create_user(self.username,self.password)
        return super().setUp()

    def tearDown(self):
        return super().tearDown()


class Test_transactions_valid(TestSetUp):

    def test_add_valid_transactions(self):
        self.client.force_authenticate(self.user)
        self.client.post(self.url,{"bank": "Citibank",
            "card_number": "5618073505538298",
            "owner_name": "aa",
            "cvv": "121",
            "expiry_date_month": "03",
            "expiry_date_year": "2023"}, format='json')
        response = self.client.post(self.url2,{"vendor": "Fanta","amount": "32.3","CreditorDebit": "Debit","category": "Others"}, format='json')
        self.assertEqual(response.status_code, 200)
        response2=self.client.get(self.url3, format='json')
        self.assertEqual(response2.status_code, 200)

    




