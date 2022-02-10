from rest_framework import viewsets, permissions, status, mixins
from rest_framework.response import Response

from users.models import User
from users.serializers import MeRetrieveSerializer, MeUpdateSerializer


class Me(mixins.CreateModelMixin, viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self, instance, data=None):
        if self.action == 'create':
            return MeUpdateSerializer(instance, data=data)

        return MeRetrieveSerializer(instance)
        
    def create(self, request):
        instance = User.objects.get(email=request.user.email)
        serializer = self.get_serializer_class(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

    def retrieve(self, request):
        return Response(data={
            'error': 'are you trying to be smart?',
        }, status=status.HTTP_404_NOT_FOUND)

    def list(self, request):
        instance = User.objects.get(email=request.user.email)
        serializer = self.get_serializer_class(instance)
        return Response(serializer.data)