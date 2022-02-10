from rest_framework import serializers

from school.models import Term, Degree


class TermsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Term
        fields = ['id', 'number']


class DegreesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Degree
        fields = ['id', 'name']