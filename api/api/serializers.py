from rest_framework import serializers
from .models import *
from django.contrib.auth.password_validation import validate_password
from rest_framework.authtoken.models import Token

# class UserSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(
#      write_only=True,required=True, validators=[validate_password])
#     password2 = serializers.CharField( write_only=True,required=True)
#     class Meta:
#         model = User
#         fields = ['username','email','password','password2']
#     def validate(self, attrs):
#         if attrs['password'] != attrs['password2']:
#             raise serializers.ValidationError(
#             {"password": "Password fields didn't match."})
#         return attrs
#     def create(self, validated_data):
#         user = User.objects.create_user(
#         username=validated_data['username'],
#         email=validated_data['email']
#         )
#         user.set_password(validated_data['password'])
#         user.save()
#         return user      

class CreateCompanySerializer(serializers.ModelSerializer):

    password = serializers.CharField(
     write_only=True,required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True,required=True)
    class Meta:
        model = Company
        fields = ["id","username","email","password","password2",'name',"description","logo","cover","website","location"]


    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
            {"password": "Password fields didn't match."})
        return attrs
    # def create(self, validated_data):
    #     uvalidated_data.pop('user')
    #     user_info.pop('password2')
    #     user=User.objects.create_user(**user_info,is_company=True)
    #     Token.objects.create(user=user)
    #     return Company.objects.create(user=user,**validated_data)
    def create(self, validated_data):
        validated_data.pop('password2')
        company=Company.objects.create(**validated_data)
        company.set_password(validated_data['password'])
        company.save()
        return company
    

class CompanySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Company
        fields = ["id","username",'name',"description","logo","cover","website","location"]


class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ['id', 'company', 'title', 'description', 'salary', 'offer_type', 'sector', 'educationLevel', 'start_date', 'end_date', 'created_at',]