from rest_framework import viewsets, permissions

from school.models import Degree, Term
from school.serializers import DegreesSerializer, TermsSerializer


class DegreesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Degree.objects.all()
    serializer_class = DegreesSerializer
    permissions_classes = [permissions.IsAuthenticated]

class TermsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Term.objects.all()
    serializer_class = TermsSerializer
    permissions_classes = [permissions.IsAuthenticated]