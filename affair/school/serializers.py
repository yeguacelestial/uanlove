from rest_framework import serializers

from school.models import StudentType, Term, Degree


class TermsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Term
        fields = ['id', 'number']


class DegreesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Degree
        fields = ['id', 'name']


class StudentTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentType
        fields = ['id', 'name']