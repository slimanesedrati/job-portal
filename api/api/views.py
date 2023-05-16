from django.shortcuts import  get_object_or_404
from rest_framework import generics, status
from .models import Offer, Company,Student,Application,User
from .serializers import OfferSerializer, CompanySerializer,CreateCompanySerializer,CreateOfferSerializer,StudentSerializer,CreateStudentSerializer,ApplicationSerializer,CreateApplicationSerializer,UpdateApplicationSerializer,UpdateOfferSerializer,UpdateStudentSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Q
from rest_framework import permissions
from rest_framework.decorators import permission_classes
from .permissions import IsStudentObjectOwnerOrReadOnly,IsCompanyObjectOwnerOrReadOnly,IsCompany,IsOfferOwner,IsStudent,IsApplicationOwner,IsCompanyApplicationOwner,IsCompanyOrReadOnly,IsStudentOrReadOnly
from rest_framework.authtoken.models import Token

# Create your views here.

# 01. Company Views
# api/companies
    
@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies,many=True)
        return Response(serializer.data, status.HTTP_200_OK)
    elif request.method == "POST":
        serializer = CreateCompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



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
class CompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes=[permissions.IsAuthenticatedOrReadOnly,IsCompanyOrReadOnly,IsCompanyObjectOwnerOrReadOnly]

# api/companies/<pk>/jobs
class CompanyOfferList(generics.ListAPIView):
    serializer_class = OfferSerializer
    def get_queryset(self):
        company = get_object_or_404(Company, pk=self.kwargs['pk'])
        # If the company itself did the request, return all the offers
        if self.request.user.is_authenticated and self.request.user == company:
            return Offer.objects.filter(company=company)
        # Otherwise, return only active offers
        else:
            return Offer.objects.filter(company=company, is_active=True)
    

# company manging applications views

#List  applications specefic to the company offers


#api/company/applications/

class CompanyApplications(generics.ListAPIView):
    serializer_class=ApplicationSerializer
    permission_classes=[permissions.IsAuthenticated,IsCompany]
    def get_queryset(self):
        company=Company.objects.get(pk=self.request.user.id)
        offers=company.offers.all()
        queryset=[]
        for offer in offers:
            applications= offer.applications.all()
            for application in applications:
                queryset.append(application)
        return queryset
    
# Applications detail for Companies

#api/company/applications/<int:pk>/

class CompanyApplicationsDetail(generics.RetrieveAPIView):
    serializer_class=ApplicationSerializer
    permission_classes=[permissions.IsAuthenticated,IsCompany,IsCompanyApplicationOwner]
    queryset=Application.objects.all()


# Applications edits for Companies
#api/company/applications/<int:pk>/edit/

class CompanyApplicationsUpdate(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=UpdateApplicationSerializer
    permission_classes=[permissions.IsAuthenticated,IsCompany,IsCompanyApplicationOwner]
    queryset=Application.objects.all()


# 02. Jobs Views

# api/offers/

# Get a list of all offers | Create a new offer
@api_view(['GET', 'POST'])
@permission_classes([permissions.IsAuthenticatedOrReadOnly,IsCompanyOrReadOnly])
def offer_list(request):
    if request.method == "GET":
        offers = Offer.objects.filter(is_active=True)
        serializer = OfferSerializer(offers, many=True)
        return Response(serializer.data, status.HTTP_200_OK)
    elif request.method == "POST":
        serializer = CreateOfferSerializer(data=request.data)
        if serializer.is_valid():
            company=Company.objects.get(pk=request.user.id)
            serializer.save(company=company)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# get offers details and delete "pk"

#api/offers/<int:pk>/

class OfferDetail(generics.RetrieveAPIView):
    queryset=Offer.objects.all()
    serializer_class=OfferSerializer


# update offers "pk"

#api/offers/<int:pk>/update/
class OfferUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset=Offer.objects.all()
    serializer_class=UpdateOfferSerializer
    permission_classes=[permissions.IsAuthenticatedOrReadOnly,IsCompanyOrReadOnly,IsOfferOwner]


# Offer search and filtering
@api_view(['GET'])
def offer_search(request):
    # GET /api/offers/search?query=python&offer_type=full-time&sector=IT&min_salary=5000&max_salary=10000
    query = request.query_params.get('query', None)
    offer_type = request.query_params.get('type', None)
    sector = request.query_params.get('sector', None)
    min_salary = request.query_params.get('min_salary', None)
    max_salary = request.query_params.get('max_salary', None)
    location = request.query_params.get('location', None)

    offers = Offer.objects.filter(is_active=True)

    if query: offers = offers.filter(Q(title__icontains=query) | Q(company__cover__icontains=query))

    if offer_type: offers = offers.filter(offer_type=offer_type)
    if sector: offers = offers.filter(sector__name=sector)
    if min_salary: offers = offers.filter(salary__gte=min_salary)
    if max_salary: offers = offers.filter(salary__lte=max_salary)
    if location: offers = offers.filter(company__location__name__icontains=location)

    serializer = OfferSerializer(offers, many=True)
    return Response(serializer.data)


#========================================================

#Students Views

#list all students

#api/students/

@api_view(['GET', 'POST'])
def studentList(request):

    if request.method == "GET":
        students = Student.objects.all()
        serializer = StudentSerializer(students,many=True)
        return Response(serializer.data, status.HTTP_200_OK)
    elif request.method == "POST":
        serializer = CreateStudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Student details 

# api/students/<int:pk>/


class StudentDetail(generics.RetrieveAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


# Student edits

# api/students/<int:pk>/edit/


class StudentUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = UpdateStudentSerializer
    permission_classes=[permissions.IsAuthenticatedOrReadOnly,IsStudentOrReadOnly,IsStudentObjectOwnerOrReadOnly]


# Applications Views

#create application view

#api/application/create/

class CreateApplication(generics.CreateAPIView):
    queryset=Application.objects.all()
    serializer_class=CreateApplicationSerializer
    permission_classes=[permissions.IsAuthenticated,IsStudent]
    def perform_create(self, serializer):
        student=Student.objects.get(pk=self.request.user.id)
        return Application.objects.create(student=student,**serializer.validated_data)
    

#list applications view

# api/applications/

class ApplicationList(generics.ListAPIView):
    queryset=Application.objects.all()
    serializer_class=ApplicationSerializer

    permission_classes=[permissions.IsAuthenticated,IsStudent,IsCompanyApplicationOwner]
    
    def get_queryset(self):
        queryset=Application.objects.filter(student=self.request.user.id)
        return queryset

        
#Application  detail Students and Company        

# Application/<int:pk>/ 

class ApplicationDetail(generics.RetrieveAPIView):
    serializer_class=ApplicationSerializer
    queryset=Application.objects.all()
    permission_classes=[permissions.IsAuthenticated,IsStudent,IsApplicationOwner]

    

        
#Application edits for Students        

# Application/<int:pk>/update/ 

class ApplicationUpdate(generics.RetrieveDestroyAPIView):
    serializer_class=UpdateApplicationSerializer
    queryset=Application.objects.all()
    permission_classes=[permissions.IsAuthenticated,IsStudent,IsApplicationOwner]




#logout view
@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def logOut(request):
    token = Token.objects.get(key=request.auth)
    user=token.user
    if user:
        token.delete()
        return Response({'info':'Succefully logged Out!'},status=status.HTTP_200_OK)
    else:
        return Response('Expired Token',status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_user_details(request):
    try:
        user_id= Token.objects.get(key=request.auth).user.id

        try:
            user=Company.objects.get(pk=user_id)
            serializer=CompanySerializer(user,many=False)
            return Response(serializer.data,status=status.HTTP_200_OK)
        except Company.DoesNotExist:
            try:
                user=Student.objects.get(pk=user_id)
                serializer=StudentSerializer(user,many=False)
                return Response(serializer.data,status=status.HTTP_200_OK)
            except Student.DoesNotExist:
                return Response({'details':'user does not exist'},status=status.HTTP_400_BAD_REQUEST)        
                        
    except Token.DoesNotExist:
        return Response({'details':'invalid token'},status=status.HTTP_400_BAD_REQUEST)
    