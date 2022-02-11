from rest_framework import viewsets, permissions, status
from rest_framework.response import Response

from school.models import Degree, StudentType, Term
from school.serializers import DegreesSerializer, StudentTypeSerializer, TermsSerializer


class DegreesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Degree.objects.all()
    serializer_class = DegreesSerializer
    permissions_classes = [permissions.IsAuthenticated]
    
    def retrieve(self, request):
        return Response(data={
            'error': 'stop strying to be smart pls',
        }, status=status.HTTP_404_NOT_FOUND)

    def list(self, request):
        instance = Degree.objects.get(faculty=request.user.faculty)
        serializer = self.get_serializer_class(instance)
        return Response(serializer.data)

class TermsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Term.objects.all()
    serializer_class = TermsSerializer
    permissions_classes = [permissions.IsAuthenticated]


class StudentTypeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = StudentType.objects.all()
    serializer_class = StudentTypeSerializer
    permissions_classes = [permissions.IsAuthenticated]