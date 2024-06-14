from django.shortcuts import render
from rest_framework import viewsets
from .serializers import GreencapSerializer
from .models import Greencap
# Create your views here.
class GreencapView(viewsets.ModelViewSet):
    serializer_class = GreencapSerializer
    queryset = Greencap.objects.all()