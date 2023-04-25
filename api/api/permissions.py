from rest_framework import permissions
from .models import*
from rest_framework.authtoken.models import Token

class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the snippet.
        
        user=Token.objects.get(key=self.request.headers.get('Authorization').split(" ")[1]).user.get_user_model()
        
        return obj.user == user