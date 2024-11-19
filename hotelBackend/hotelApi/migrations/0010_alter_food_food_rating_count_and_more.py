# Generated by Django 5.1.1 on 2024-11-18 17:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotelApi', '0009_remove_food_food_rating_food_food_rating_average_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='food',
            name='food_rating_count',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='food',
            name='food_rating_sum',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='review',
            name='rating',
            field=models.PositiveIntegerField(default=0),
        ),
    ]