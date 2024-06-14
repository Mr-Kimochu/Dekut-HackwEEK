from rest_framework import serializers
from .models import Greencap

class GreencapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Greencap
        fields = ('id', 'title', 'description', 'goal', 'methodology', 'picture','contact','lon', 'lat','date')