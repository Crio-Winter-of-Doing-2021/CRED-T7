from rest_framework import serializers
from .models import Cards, Transactions
import time
from django.core.validators import MinValueValidator
yearn, monthn, dayn, hourn, minn = map(
    int, time.strftime("%Y %m %d %H %M").split())

# function


def checkLuhn(cardNo):

    nDigits = len(cardNo)
    nSum = 0
    isSecond = False

    for i in range(nDigits - 1, -1, -1):
        d = ord(cardNo[i]) - ord('0')

        if (isSecond == True):
            d = d * 2

        # We add two digits to handle
        # cases that make two digits after
        # doubling
        nSum += d // 10
        nSum += d % 10

        isSecond = not isSecond

    if (nSum % 10 == 0):
        return True
    else:
        return False


class CardSerializer(serializers.ModelSerializer):

    banks = {'SBI': 'sbi.co.in', 'HDFC': 'hdfcbank.com', 'Standard Chartered Bank': 'sc.com', 'YES Bank': 'yesbank.in',
             'Citibank': 'citibank.co.in', 'ICICI Bank': 'icicibank.com',
             'American Express': 'americanexpress.com', 'IndusInd Bank': 'indusind.com',
             'RBL Bank': 'rblbank.com', 'Allahabad Bank': 'allahabadbank.com', 'Bajaj Finserv': 'bajajfinserv.in',
             'Andhra Bank': 'andhrabank.in', 'Axis Bank': 'axisbank.com', 'Bank of India': 'bankofindia.comb',
             'Bank of Baroda': 'bobibanking.com', 'Bank of Maharashtra': 'bankofmaharashtra.in',
             'Canara Bank': 'canarabank.com', 'Central Bank of India': 'centralbankofindia.co.in', 'DCB Bank': 'dcbbank.com',
             'Federal Bank': 'federalbank.co.in', 'HSBC Bank': 'hsbc.com', 'IDBI Bank': 'idbibank.in', 'Indian Bank': 'indianbank.in',
             'Kotak Mahindra Bank': 'kotak.com', 'Nainital Bank': 'nainitalbank.co.in', 'Punjab National Bank': 'pnbindia.in',
             'Tata Capital': 'tatacapital.com', 'UCO Bank': 'ucobank.com', 'Union Bank of India': 'unionbankofindia.co.in', 'Vijaya Bank': 'vijayabank.com'}
    bank_domain = serializers.SerializerMethodField('get_bank_domain')

    def get_bank_domain(self, obj):
        if(obj.bank in self.banks):
            return self.banks[obj.bank]
        else:
            return "Not Mentioned"

    class Meta:
        model = Cards
        fields = ['id', 'bank', 'card_number', 'owner_name', 'cvv',
                  'expiry_date_month', 'expiry_date_year', 'bank_domain', 'credit']

    def validate_cvv(self, value):
        try:
            if(len(value) != 3):
                raise serializers.ValidationError(
                    "CVV should have 3 digits.")
            return value

        except ValueError:
            raise serializers.ValidationError(
                "Incorrect value entered. Try again.")

    def validate_card_number(self, value):
        try:
            if(checkLuhn(value) == False or len(value) != 16):
                raise serializers.ValidationError(
                    "Incorrect credit card number entered. Try again.")
            return value

        except ValueError:
            raise serializers.ValidationError(
                "Incorrect value entered. Try again.")

    def validate_expiry_date_month(self, value):
        try:
            num = int(value)
            if(len(value) != 2):
                raise serializers.ValidationError(
                    "Month should have 2 digits, in the form of MM.")
            if((num <= 0 or num > 13)):
                raise serializers.ValidationError(
                    "Month value should be between 1 and 12.")
            return value

        except ValueError:
            raise serializers.ValidationError(
                "Incorrect value entered. Try again.")

    def validate_expiry_date_year(self, value):
        try:
            num = int(value)
            if(len(value) != 4):
                raise serializers.ValidationError(
                    "Year should have 4 digits, in the form of YYYY.")
            print(yearn)
            if(num < yearn):
                raise serializers.ValidationError(
                    "Card expired, add another card.")
            return value

        except ValueError:
            raise serializers.ValidationError(
                "Incorrect value entered. Try again.")


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transactions
        fields = '__all__'


class payCardSerializer(serializers.Serializer):
    pay_amount = serializers.DecimalField(max_digits=19, decimal_places=2, validators=[
        MinValueValidator(float('0.01'))])
