# Generated by Django 5.1.1 on 2024-09-23 06:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotelApi', '0005_tabelreservation'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='view',
            field=models.IntegerField(default=0),
        ),
    ]
