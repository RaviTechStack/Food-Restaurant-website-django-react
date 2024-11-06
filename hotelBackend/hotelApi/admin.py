from django.contrib import admin
from .models import Food, FoodTaste, FoodType, TabelReservation, Cart, CartItem
# Register your models here.

admin.site.register((Food, FoodTaste, FoodType, TabelReservation, Cart, CartItem))