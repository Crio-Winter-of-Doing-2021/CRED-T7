from rest_framework import serializers
from .models import Cards
import time
yearn, monthn, dayn, hourn, minn = map(int, time.strftime("%Y %m %d %H %M").split())

#function
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
    class Meta:
        model = Cards
        fields = '__all__'




    def validate_cvv(self, value):
        try:
            if(len(value)!=3):
                raise serializers.ValidationError(
                    "CVV should have 3 digits")
            return value

        except ValueError:
            raise serializers.ValidationError(
                "Incorrect value entered. Try again.")
    
    def validate_card_number(self, value):
        try:
            num = int(value)
            if(checkLuhn(value)==False or len(value)!=16):
                raise serializers.ValidationError(
                    "Incorrect credit card number entered. Try again.")
            return value

        except ValueError:
            raise serializers.ValidationError(
                "Incorrect value entered. Try again.")


    def validate_expiry_date_month(self, value):
        try:
            num=int(value)
            if(len(value)!=2):
                raise serializers.ValidationError(
                    "Month should have 2 digits, in the form of MM")
            if((num<=0 or num>13)):
                raise serializers.ValidationError(
                    "Month value should be between 1 and 12")
            return value

        except ValueError:
            raise serializers.ValidationError(
                "Incorrect value entered. Try again.")

    def validate_expiry_date_year(self, value):
        try:
            num=int(value)
            if(len(value)!=4):
                raise serializers.ValidationError(
                    "Year should have 4 digits, in the form of YYYY")
            print(yearn)
            if(num< yearn):
                raise serializers.ValidationError(
                    "Card expired, enter another card")
            return value

        except ValueError:
            raise serializers.ValidationError(
                "Incorrect value entered. Try again.")