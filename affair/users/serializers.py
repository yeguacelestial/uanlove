from rest_framework import serializers

from users.models import User


class MeRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = (
            'id',
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

class MeUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'birthday',
            'age',
            'gender',
            'sex_preference',
            'location',
            'term',
            'degree',
            'bio'
        )