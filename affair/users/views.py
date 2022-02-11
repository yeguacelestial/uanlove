from allauth.socialaccount.models import SocialAccount
from rest_framework import mixins, permissions, status, viewsets
from rest_framework.response import Response

from users.models import Gender, SexPreference, User
from users.serializers import (AvailableGendersSerializer,
                               AvailableSexPreferencesSerializer,
                               MeRetrieveSerializer, MeUpdateSerializer)

from school.models import Faculty


class MeViewSet(mixins.CreateModelMixin, viewsets.ReadOnlyModelViewSet):
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

        if serializer.validated_data.get('age') < 18:
            return Response(data={
                'error': '¡No puedes registrarte si eres menor de 18 años!',
            }, status=status.HTTP_401_UNAUTHORIZED)

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
        # This should be done only the first time the user logs in
        social_account = SocialAccount.objects.get(user__email=request.user.email)

        social_account_faculty = social_account.extra_data.get('officeLocation')
        social_account_student_type = social_account.extra_data.get('jobTitle')

        try:
            faculties = Faculty.objects.get(name=social_account_faculty)
        except Faculty.DoesNotExist:
            faculties = None

        instance = User.objects.get(email=request.user.email)
        instance.faculty = Faculty.objects.get(name__contains=social_account_faculty)
        instance.student_type = social_account_student_type
        
        serializer = self.get_serializer_class(instance)
        return Response(serializer.data)


class AvailableGendersViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Gender.objects.all()
    serializer_class = AvailableGendersSerializer
    permission_classes = [permissions.IsAuthenticated]


class AvailableSexPreferencesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SexPreference.objects.all()
    serializer_class = AvailableSexPreferencesSerializer
    permissions_classes = [permissions.IsAuthenticated]
