# Generated by Django 3.1.6 on 2021-03-03 06:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cards',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bank', models.CharField(max_length=200)),
                ('card_number', models.CharField(max_length=16, unique=True)),
                ('owner_name', models.CharField(max_length=200)),
                ('cvv', models.CharField(max_length=3)),
                ('expiry_date_month', models.CharField(max_length=2)),
                ('expiry_date_year', models.CharField(max_length=4)),
            ],
        ),
    ]
