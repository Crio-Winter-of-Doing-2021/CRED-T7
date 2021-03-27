# Generated by Django 3.1.6 on 2021-03-21 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cards', '0006_auto_20210306_1936'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cards',
            name='card_number',
            field=models.CharField(error_messages={'unique': 'This card has already been added. Try another.'}, max_length=16, unique=True),
        ),
    ]