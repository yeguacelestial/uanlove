from rest_framework import viewsets, permissions, status
from rest_framework.response import Response

from school.models import Degree, Faculty, StudentType, Term
from school.serializers import DegreesSerializer, FacultySerializer, StudentTypeSerializer, TermsSerializer


class DegreesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Degree.objects.all()
    serializer_class = DegreesSerializer
    permissions_classes = [permissions.IsAuthenticated]

    def retrieve(self, request):
        return Response(data={
            'error': 'stop strying to be smart pls',
        }, status=status.HTTP_404_NOT_FOUND)

    def list(self, request):
        try:
            instance = Degree.objects.get(faculty=request.user.faculty)
        except Degree.DoesNotExist:
            return Response(data={
                'error': 'degrees not found',
            }, status=status.HTTP_404_NOT_FOUND)

        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class TermsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Term.objects.all()
    serializer_class = TermsSerializer
    permissions_classes = [permissions.IsAuthenticated]


class StudentTypeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = StudentType.objects.all()
    serializer_class = StudentTypeSerializer
    permissions_classes = [permissions.IsAuthenticated]


class FacultyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
    permissions_classes = [permissions.IsAuthenticated]