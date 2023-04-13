from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, generics, status
from .models import Offer, Company
from .serializers import OfferSerializer, CompanySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Q
# Create your views here.

#========================================================
# Api Endpoints

# 1. Company app:
# 	* api/companies -> get companies listing  -done
# 	* api/companies/search?<query>=<search_query> -> search company -done
# 	* api/companies/<companyName> -> company details and informations -done
# 	* api/companies/<companyName>/jobs -> Companies Jobs listing -done

# 2. Jobs app:
# 	* api/jobs -> Jobs listing -done
# 	* api/jobs/search?<query>=<search_query> -> search
# 	* api/jobs/<job_id> -> get job details | Job's 'CRUD' if authenticated -done
# ========================================================

# 01. Company Views

# api/companies
class CompanyList(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

# api/companies/search?<query>=<search_query>
@api_view(['GET'])
def company_search(request):
    query = request.query_params.get('query', None)
    if query is not None:
        companies = Company.objects.filter(name__icontains=query)
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)

# api/companies/<companyName>
class CompanyDetail(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    def get_object(self):
        return get_object_or_404(Company, pk=self.kwargs['pk'])

# api/companies/<pk>/jobs
class CompanyJobList(generics.ListAPIView):
    serializer_class = OfferSerializer
    def get_queryset(self):
        company = get_object_or_404(Company, pk=self.kwargs['pk'])

        # If the company itself did the request, return all the offers
        if self.request.user.is_authenticated and self.request.user.company == company:
            return Offer.objects.filter(company=company)
        # Otherwise, return only active offers
        else:
            return Offer.objects.filter(company=company, is_active=True)
    

# 02. Jobs Views

# Get a list of all jobs | Create a new job
@api_view(['GET', 'POST'])
def job_list(request):
    if request.method == "GET":
        jobs = Offer.objects.filter(is_active=True)
        serializer = OfferSerializer(jobs, many=True)
        return Response(serializer.data, status.HTTP_200_OK)
    elif request.method == "POST":
        serializer = OfferSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# get jobs details, update and delete "pk"
@api_view(['GET', 'PUT', 'DELETE'])
def jobs_pk(request, pk):
    
    try:
        job = Offer.objects.get(pk=pk)
    except Offer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = OfferSerializer(job)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = OfferSerializer(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        job.delete()
        return Response(status=status.HTTP_202_ACCEPTED)


# Job search and filtering
@api_view(['GET'])
def job_search(request):
    # GET /api/jobs/search?query=python&offer_type=full-time&sector=IT&min_salary=5000&max_salary=10000
    query = request.query_params.get('query', None)
    offer_type = request.query_params.get('type', None)
    sector = request.query_params.get('sector', None)
    min_salary = request.query_params.get('min_slary', None)
    max_salary = request.query_params.get('max_salary', None)
    location = request.query_params.get('location', None)

    jobs = Offer.objects.filter(is_active=True)

    if query: jobs = jobs.filter(Q(title__icontains=query) | Q(company__name__icontains=query))
    if offer_type: jobs = jobs.filter(offer_type=offer_type)
    if sector: jobs = jobs.filter(sector__name=sector)
    if min_salary: jobs = jobs.filter(salary__gte=min_salary)
    if max_salary: jobs = jobs.filter(salary__lte=max_salary)
    if location: jobs = jobs.filter(company__location__name__icontains=location)

    serializer = OfferSerializer(jobs, many=True)
    return Response(serializer.data)