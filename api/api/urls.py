from rest_framework import routers
from django.urls import path
from django.conf.urls import include
from .views import JobsVS, CompanyList, company_search, CompanyDetail, CompanyJobList

router = routers.DefaultRouter()
router.register('jobs', JobsVS)

urlpatterns = [
    path('', include(router.urls)),
    path('companies/', CompanyList.as_view(), name="companies_list"),
    path('companies/search', company_search, name="company_search"),
    path('companies/<int:pk>/', CompanyDetail.as_view(), name="company_detail"),
    path('companies/jobs/<int:pk>/', CompanyJobList.as_view(), name="company_job_list")
]