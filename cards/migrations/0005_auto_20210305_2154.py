# Generated by Django 3.1.4 on 2021-03-05 21:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cards', '0004_remove_transactions_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='cards',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cards', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='transactions',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='transactions', to='cards.cards'),
        ),
        migrations.AlterField(
            model_name='transactions',
            name='amount',
            field=models.DecimalField(decimal_places=2, max_digits=19),
        ),
    ]