from rest_framework import serializers
from .models import *
from django.contrib.auth.password_validation import validate_password
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
     write_only=True,required=True, validators=[validate_password])
    password2 = serializers.CharField( write_only=True,required=True)
    class Meta:
        model = User
        fields = ['username','email','password','password2']
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
            {"password": "Password fields didn't match."})
        return attrs
    def create(self, validated_data):
        user = User.objects.create_user(
        username=validated_data['username'],
        email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user      



class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ['id', 'company', 'title', 'description', 'salary', 'offer_type', 'sector', 'educationLevel', 'start_date', 'end_date', 'created_at',]


class CompanySerializer(serializers.ModelSerializer):
    user= UserSerializer(many=False)
    class Meta:
        model = Company
        fields = '__all__'

    def create(self, validated_data):
        user_info=validated_data.pop('user')
        user_info.pop('password2')
        user=User.objects.create_user(**user_info,is_company=True)
        return Company.objects.create(user=user,**validated_data)