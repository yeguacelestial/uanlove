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
        age = request.data.get('age', 0)

        if age < 18:
            return Response(data={
                'error': '¡No puedes registrarte si eres menor de 18 años!',
            }, status=status.HTTP_401_UNAUTHORIZED)

        instance = User.objects.get(email=request.user.email)
        serializer = self.get_serializer_class(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        # send full data through list serializer
        updated_instance = User.objects.get(email=request.user.email)
        self.action = 'list'
        updated_serializer = self.get_serializer_class(updated_instance)

        return Response(updated_serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request):
        return Response(data={
            'error': 'are you trying to be smart?',
        }, status=status.HTTP_404_NOT_FOUND)

    def list(self, request):
        instance = User.objects.get(email=request.user.email)
        serializer = self.get_serializer_class(instance)
        return Response(serializer.data)