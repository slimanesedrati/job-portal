from django.contrib import admin

from .models import Sector, Company, Student, Application, Offer
# Register your models here.
admin.site.register(Sector)
admin.site.register(Company)
admin.site.register(Student)
admin.site.register(Offer)
admin.site.register(Application)