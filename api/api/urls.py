from django.urls import path
from django.conf.urls import include
from .views import *
from rest_framework.authtoken import views


urlpatterns = [
    path('companies/', CompanyList.as_view(), name="companies_list"),
    path('companies/search', company_search, name="company_search"),
    path('companies/<int:pk>/', CompanyDetail.as_view(), name="company_detail"),
    path('companies/<int:pk>/jobs/', CompanyJobList.as_view(), name="company_job_list"),

    path('jobs/', job_list, name='jobs_list'),
    path('jobs/search/', job_search, name='job_search'),
    path('jobs/<int:pk>/', jobs_pk, name='jobs_pk'),
]
urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]


# urlpatterns += [
#     path('api-token-auth/', views.obtain_auth_token)
# ]