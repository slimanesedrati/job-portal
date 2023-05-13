from rest_framework import serializers
from .models import *
from django.contrib.auth.password_validation import validate_password
from rest_framework.authtoken.models import Token
 

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
    def create(self, validated_data):
        validated_data.pop('password2')
        company=Company.objects.create(**validated_data)
        company.set_password(validated_data['password'])
        company.is_company=True
        company.save()
        return company
    

class CompanySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Company
        fields = ["id","username",'name',"description","logo","cover","website","location"]


class CompanyOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name','logo','location']


class CreateOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ['id', 'title', 'description','salary','offer_type', 'sector', 'educationLevel', 'start_date', 'end_date', 'created_at',]

class OfferSerializer(serializers.ModelSerializer):
    company=CompanyOfferSerializer(many=False,read_only=True)
    sector = serializers.StringRelatedField()
    offer_type=serializers.CharField(source='get_offer_type_display')
    class Meta:
        model = Offer
        fields = ['id','title', 'description','company','salary','offer_type', 'sector', 'educationLevel', 'start_date', 'end_date', 'created_at',]

    

class UpdateOfferSerializer(serializers.ModelSerializer):
    company=CompanyOfferSerializer(many=False,read_only=True)
    class Meta:
        model = Offer
        fields = ['id', 'title', 'description','company','salary','offer_type', 'sector', 'educationLevel', 'start_date', 'end_date', 'created_at',]



class CreateStudentSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
     write_only=True,required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True,required=True)

    class Meta:
        model=Student
        fields=["username",'first_name','last_name','age','gender','educationLevel','university','profileImage','password','password2']
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
            {"password": "Password fields didn't match."})
        return attrs
    def create(self, validated_data):
        validated_data.pop('password2')
        student=Student.objects.create(**validated_data)
        student.set_password(validated_data['password'])
        student.save()
        return student
    
class UpdateStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields=["username",'first_name','last_name','age','gender','educationLevel','university','profileImage']


class StudentSerializer(serializers.ModelSerializer):
    gender=serializers.CharField(source='get_gender_display')
    class Meta:
        model=Student
        fields=["id","username",'first_name','last_name','age','gender','educationLevel','university','profileImage']

class CreateApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields=['id','offer','status']

class UpdateApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields='__all__'
        read_only_fields = ['offer','student']


class ApplicationSerializer(serializers.ModelSerializer):
    status=serializers.CharField(source='get_status_display')
    offer=serializers.SlugRelatedField(slug_field='title',read_only=True)
    student=serializers.SlugRelatedField(slug_field='username',read_only=True)
    
    class Meta:
        model = Application
        fields='__all__'
