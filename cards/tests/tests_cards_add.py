from django.test import TestCase
from cards.models import *
from django.contrib.auth import get_user_model
# Create your tests here.
from rest_framework.test import APITestCase,APIRequestFactory,force_authenticate, APIClient
from django.urls import reverse
from cards.api import *
from rest_framework import status
from django.shortcuts import reverse
from rest_framework.authtoken.models import Token


class TestSetUp(APITestCase):
    
    def setUp(self):
        self.username = "a"
        self.email = "a@a.com"
        self.password = "a"
        self.user = get_user_model().objects.create_user(self.username,
                                                         self.password)
        self.url = reverse("cards")
        self.url2 = reverse("viewcards",kwargs={'pk':1})
    def tearDown(self):
        return super().tearDown()


class addCardAPIViewTestCase(TestSetUp):

    def test_create_valid_luhn_cards(self):
        self.client.force_authenticate(self.user)
        response = self.client.post(self.url,{"bank": "Citibank","card_number": "5618073505538298","owner_name": "c1","cvv": "121","expiry_date_month": "03","expiry_date_year": "2023"}, format='json')
        self.assertEqual(Cards.objects.count(), 1)
        self.assertEqual(response.status_code, 200)

    def test_invalid_luhn_cards(self):
        self.client.force_authenticate(self.user)
        response = self.client.post(self.url,{"bank": "Citibank","card_number": "58073505538298","owner_name": "c1","cvv": "121","expiry_date_month": "03","expiry_date_year": "2023"}, format='json')
        # self.assertEqual(Cards.objects.count(), 1)
        self.assertEqual(response.status_code, 400)

    def test_invalid_user(self):
        # self.client.force_authenticate(self.user)
        response = self.client.post(self.url,{"bank": "Citibank","card_number": "5618073505538298","owner_name": "c1","cvv": "121","expiry_date_month": "03","expiry_date_year": "2023"}, format='json')
        # self.assertEqual(Cards.objects.count(), 1)
        self.assertEqual(response.status_code, 401)

    def test_missing_field(self):
        self.client.force_authenticate(self.user)
        response = self.client.post(self.url,{"card_number": "5618073505538298","owner_name": "c1","cvv": "121","expiry_date_month": "03","expiry_date_year": "2023"}, format='json')
        # self.assertEqual(Cards.objects.count(), 1)
        self.assertEqual(response.status_code, 400)

    def test_expired_card(self):
        self.client.force_authenticate(self.user)
        response = self.client.post(self.url,{"bank": "Citibank","card_number": "5618073505538298","owner_name": "c1","cvv": "121","expiry_date_month": "03","expiry_date_year": "2010"}, format='json')
        # self.assertEqual(Cards.objects.count(), 1)
        self.assertEqual(response.status_code, 400)

    def test_duplicates_card(self):
        self.client.force_authenticate(self.user)
        self.client.post(self.url,{"bank": "Citibank","card_number": "5618073505538298","owner_name": "c1","cvv": "121","expiry_date_month": "03","expiry_date_year": "2022"}, format='json')
        response=self.client.post(self.url,{"bank": "Citibank","card_number": "5618073505538298","owner_name": "c1","cvv": "121","expiry_date_month": "03","expiry_date_year": "2022"}, format='json')
        # self.assertEqual(Cards.objects.count(), 1)
        self.assertEqual(response.status_code, 400)

    def test_get_card(self):
        self.client.force_authenticate(self.user)
        self.client.post(self.url,{"bank": "Citibank","card_number": "5618073505538298","owner_name": "c1","cvv": "121","expiry_date_month": "03","expiry_date_year": "2022"}, format='json')
        self.client.post(self.url,{"bank": "SBI","card_number": "8191874304305865","owner_name": "c1","cvv": "121","expiry_date_month": "03","expiry_date_year": "2022"}, format='json')
        self.assertEqual(Cards.objects.count(), 2)
        response=self.client.get(self.url, format='json')
        self.assertEqual(response.status_code, 200)




