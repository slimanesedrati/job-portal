from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractUser


# Create your models here.


#Custom User Model

class User(AbstractUser):
    is_company = models.BooleanField(default=False)

    



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
    

class Student(User):
    MALE = "1"
    FEMALE = "2"
    GENDER_TYPE_CHOICES = [
        (MALE, 'Male'),
        (FEMALE, 'female')
    ]


    profileImage = models.ImageField(upload_to='images', blank=True,null=True)
    age = models.IntegerField(null=True, blank=True)
    gender = models.CharField(max_length=1, choices=GENDER_TYPE_CHOICES, default=MALE, blank=True)
    educationLevel = models.CharField(max_length=50, blank=True, null=True)
    university = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name} {self.username}"
    
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
     


class Company(User):

    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    logo = models.ImageField(upload_to='images', blank=True,null=True)
    cover = models.ImageField(upload_to='images', blank=True,null=True)

    website = models.URLField(blank=True)
    location = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True)
    
    def __str__(self) -> str:
        return self.name 
       


class Offer(models.Model):
    INTERSHIP = "1"
    JOB = "2"
    OFFER_TYPE_CHOICES = [
        (INTERSHIP, 'Intership'),
        (JOB, 'Job'),
    ]

    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_query_name='Offer',related_name='offers')

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
    PENDING = "1"
    ACCEPTED = "2"
    REJECTED = "3"
    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (ACCEPTED, 'Accepted'),
        (REJECTED, 'Rejected')
    ]

    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_query_name='Application')
    offer = models.ForeignKey(Offer, on_delete=models.CASCADE, related_name='applications')
    
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default=PENDING)

    def __str__(self) -> str:
        return f"{self.student.get_full_name()} x {self.offer.title}"