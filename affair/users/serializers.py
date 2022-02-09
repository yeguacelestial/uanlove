from csv import excel
from rest_framework import serializers

from users.models import User


class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = (
            'password',
            'last_login',
            'is_superuser',
            'is_staff',
            'is_active',
            'date_joined',
            'groups',
            'user_permissions',
            'username'
        )