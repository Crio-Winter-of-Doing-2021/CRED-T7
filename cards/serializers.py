from rest_framework import serializers
from .models import Cards


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cards
        fields = '__all__'

    def validate_card_number(self, value):
        try:
            if(len(value) != 16):
                raise serializers.ValidationError(
                    "Incorrect credit card number entered. Try again.")
            num = int(value)
            print(num)
            return value

        except ValueError:
            raise serializers.ValidationError(
                "Incorrect value entered. Try again.")
