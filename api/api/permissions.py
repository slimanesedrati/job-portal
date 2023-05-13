from rest_framework import permissions
from .models import * 
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.response import Response


class IsStudentObjectOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the object.

        user=Student.objects.get(auth_token=request.auth)

        return obj == user
       
    
class IsCompanyObjectOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the object.

        user=Company.objects.get(auth_token=request.auth)
        return obj == user
        
    

class IsCompanyOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        user=Token.objects.get(key=request.auth).user
        return user.is_company
class IsCompany(permissions.BasePermission):
    def has_permission(self, request, view):
        user=Token.objects.get(key=request.auth).user
        return user.is_company
    
class IsStudent(permissions.BasePermission):
    def has_permission(self, request, view):
        user=Token.objects.get(key=request.auth).user
        return not user.is_company
    
class IsStudentOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        user=Token.objects.get(key=request.auth).user
        return not user.is_company
    

class IsOfferOwner(permissions.BasePermission):
    def  has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        # user=Token.objects.get(key=request.auth).user
        user=Company.objects.get(auth_token=request.auth)
        return obj.company==user
        

class IsApplicationOwner(permissions.BasePermission):
    def  has_object_permission(self, request, view, application):
        user=Student.objects.get(auth_token=request.auth)
        # user=Token.objects.get(key=request.auth).user
        return application.student==user
    
class IsCompanyApplicationOwner(permissions.BasePermission):
    def  has_object_permission(self, request, view, application):
        # company=Company.objects.get(auth_token=request.auth)
        user=Company.objects.get(auth_token=request.auth)
        return application.offer.company==user