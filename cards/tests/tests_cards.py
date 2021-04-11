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
        self.username = "b"
        self.email = "b@b.com"
        self.password = "b"
        self.user = get_user_model().objects.create_user(self.username,
                                                         self.password)

        self.url = reverse("cards")
        self.url2 = reverse("viewcards",kwargs={'pk':1})

    def tearDown(self):
        return super().tearDown()


class viewCardAPIViewTestCase(TestSetUp):

    def test_view_card(self):
        self.client.force_authenticate(self.user)
        self.client.post(self.url,{"bank": "Citibank","card_number": "6609563422073360","owner_name": "c1","cvv": "121","expiry_date_month": "03","expiry_date_year": "2022"}, format='json')
        self.client.post(self.url,{"bank": "SBI","card_number": "3281798283587767","owner_name": "c1","cvv": "121","expiry_date_month": "03","expiry_date_year": "2022"}, format='json')
        response=self.client.get(self.url2, format='json')
        self.assertEqual(response.status_code, 200)