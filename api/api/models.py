from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import *


# Create your models here.


#Custom User Model

class User(AbstractUser):
    is_company = models.BooleanField(default=False)

    def create_user(self, username, password, **extra_fields):
        if not username:
            raise ValueError('Users must have an username')
        username = username
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, usernamw, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self.create_user(usernamw, password, **extra_fields)
    



class Sector(models.Model):
    name = models.CharField(max_length=250)
    views_count = models.IntegerField(null=True, blank=True, default=0)
    def __str__(self) -> str:
        return self.name

class Location(models.Model):
    code = models.IntegerField(blank=True)
    name = models.CharField(max_length=200, blank=True)
    ar_name = models.CharField(max_length=200, blank=True)
    longitude = models.CharField(max_length=50, null=True, blank=True)
    latitude = models.CharField(max_length=50, null=True, blank=True)
    class Meta:
        ordering=['name']
    
    def __str__(self) -> str:
        return self.name
    

class Student(models.Model):
    MALE = '1'
    FEMALE = '2'
    GENDER_TYPE_CHOICES = [
        (MALE, 'Male'),
        (FEMALE, 'female')
    ]
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='student')
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    profileImage = models.ImageField(upload_to='images', blank=True)
    age = models.IntegerField()
    gender = models.CharField(max_length=1, choices=GENDER_TYPE_CHOICES, default=MALE, blank=True)
    educationLevel = models.CharField(max_length=50, blank=True, null=True)
    university = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name} {self.user.get_username()}"
    
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
     


class Company(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='company')
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    logo = models.ImageField(upload_to='images', blank=True)
    cover = models.ImageField(upload_to='images', blank=True)

    website = models.URLField(blank=True)
    location = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True)
    
    def __str__(self) -> str:
        return self.name



class Offer(models.Model):
    INTERSHIP = '1'
    OFFER_TYPE_CHOICES = [
        (INTERSHIP, 'Intership')
    ]

    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_query_name='Offer')

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, help_text='Description about the offer')
    salary = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)

    offer_type = models.CharField(max_length=1, choices=OFFER_TYPE_CHOICES, default=INTERSHIP)
    sector = models.ForeignKey(Sector, on_delete=models.CASCADE, related_query_name='Offer')
    educationLevel = models.CharField(max_length=100, blank=True)
    
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.title} by {self.company.name}"
    

class Application(models.Model):
    PENDING = 'pending'
    ACCEPTED = 'accepted'
    REJECTED = 'rejected'
    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (ACCEPTED, 'Accepted'),
        (REJECTED, 'Rejected')
    ]

    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_query_name='Application')
    offer = models.ForeignKey(Offer, on_delete=models.CASCADE, related_name='Application')
    
    status = models.CharField(max_length=8, choices=STATUS_CHOICES, default=PENDING)

    def __str__(self) -> str:
        return f"{self.student.get_full_name()} x {self.offer.title}"
