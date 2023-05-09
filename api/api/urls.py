from django.urls import path
from django.conf.urls import include
from .views import *
from rest_framework.authtoken import views

urlpatterns = [
    path('companies/', company_list, name="companies_list"),
    path('companies/search', company_search, name="company_search"),
    path('companies/<int:pk>/', CompanyDetail.as_view(), name="company_detail"),
    path('companies/<int:pk>/offers/', CompanyOfferList.as_view(), name="company_offer_list"),
    path('company/applications/', CompanyApplications.as_view(), name="company_applications"),
    path('company/applications/<int:pk>/', CompanyApplicationsDetail.as_view(), name="company_applications_detail"),

    path('offers/', offer_list, name='offers_list'),
    path('offers/search/', offer_search, name='offer_search'),
    path('offers/<int:pk>/', OfferDetail.as_view(), name='offers_pk'),

    path('students/', studentList, name='students_list'),
    path('students/<int:pk>/', StudentDetail.as_view(), name='students_pk'),

    path('applications/', ApplicationList.as_view(), name='applications_list'),
    path('application/create/', CreateApplication.as_view(), name='application_create'),

    path('application/<int:pk>/', ApplicationDetail.as_view(), name='applications_pk'),

]


urlpatterns += [
    path('auth/', include('rest_framework.urls')),
]