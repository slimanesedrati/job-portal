from rest_framework import permissions
from .models import * 
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.response import Response


class IsObjectOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the object.
        return (obj.username==request.user.username and obj.password==request.user.password)
    

class IsCompanyOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_company
class IsCompany(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_company
    
class IsStudent(permissions.BasePermission):
    def has_permission(self, request, view):
        
        return not request.user.is_company
    

class IsOfferOwner(permissions.BasePermission):
    def  has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
          
        return obj.company==Company.objects.get(pk=request.user)
        

class IsApplicationOwner(permissions.BasePermission):
    def  has_object_permission(self, request, view, application):

        return application.student==Student.objects.get(pk=request.user) 
    
class IsCompanyApplicationOwner(permissions.BasePermission):
    def  has_object_permission(self, request, view, application):

        return application.offer.company==Company.objects.get(pk=request.user)
        