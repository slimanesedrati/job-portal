from rest_framework import serializers
from .models import Offer, Company

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ['id', 'company', 'title', 'description', 'salary', 'offer_type', 'sector', 'educationLevel', 'start_date', 'end_date', 'created_at',]


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'