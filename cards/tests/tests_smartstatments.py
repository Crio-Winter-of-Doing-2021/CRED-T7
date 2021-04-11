from django.urls import reverse
from cards.models import *
from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase, APIRequestFactory,force_authenticate, APIClient
from rest_framework import status


class TestSetUp(APITestCase):

    def setUp(self):
        self.url = reverse("cards")
        self.url2 = reverse("transactions",kwargs={'pk':9, 'year':2021,'month':4})
        self.url3 = reverse("smartstatements",kwargs={'pk':9})

        self.username = "p"
        self.email = "p@snow.com"
        self.password = "p"
        self.user = get_user_model().objects.create_user(self.username,self.password)
        return super().setUp()

    def tearDown(self):
        return super().tearDown()

class Test_smartstatement(TestSetUp):

    def test_smartstatement(self):
        self.client.force_authenticate(self.user)
        self.client.post(self.url,{"bank": "HDFC",
            "card_number": "3418941780672601",
            "owner_name": "john",
            "cvv": "121",
            "expiry_date_month": "10",
            "expiry_date_year": "2029"}, format='json')
        self.client.post(self.url2,{"vendor": "Fanta","amount": "32","CreditorDebit": "Debit","category": "Others"}, format='json')
        self.client.post(self.url2,{"vendor": "Fanta","amount": "32","CreditorDebit": "Debit","category": "Others"}, format='json')
        self.client.post(self.url2,{"vendor": "Coke","amount": "72","CreditorDebit": "Debit","category": "Others"}, format='json')
        response=self.client.get(self.url3, format='json')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["results"][0]["vendor"], "Coke")
        self.assertEqual(response.data["results"][1]["total"], 2)
        self.assertEqual(response.data["results"][1]["total_amount"], "64.00")

