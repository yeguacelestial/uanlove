import email
from rest_framework import viewsets, permissions
from rest_framework.response import Response

from users.models import User
from users.serializers import MeSerializer


class Me(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = MeSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def retrieve(self, request, *args, **kwargs):
        instance = User.objects.get(email=request.user.email)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def list(self, request, *args, **kwargs):
        instance = User.objects.get(email=request.user.email)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)