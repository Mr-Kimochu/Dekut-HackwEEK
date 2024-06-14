from django.contrib import admin
from .models import Greencap
# Register your models here.
class GreencapAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'goal', 'methodology','picture', 'contact','lon', 'lat', 'date')

admin.site.register(Greencap, GreencapAdmin)