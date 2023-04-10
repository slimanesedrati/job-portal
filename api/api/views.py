from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, generics, status
from .models import Offer, Company
from .serializers import OfferSerializer, CompanySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

#========================================================
# Api Endpoints

# 1. Company app:
# 	* api/companies -> get companies listing  -done
# 	* api/companies/search?<query>=<search_query> -> search company -done
# 	* api/companies/<companyName> -> company details and informations -done
# 	* api/companies/<companyName>/jobs -> Companies Jobs listing -done

# 2. Jobs app:
# 	* api/jobs -> Jobs listing
# 	* api/jobs/search?<query>=<search_query> -> search
# 	* api/jobs/<job_id> -> get job details | Job's 'CRUD' if authenticated
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
        return Offer.objects.filter(company=company, is_active=True)
    

# 02. Jobs Views
class JobsVS(viewsets.ModelViewSet):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer