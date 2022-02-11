from rest_framework import serializers

from users.models import Gender, SexPreference, User


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
            'username',
            'first_time_login',
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


class AvailableGendersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gender
        fields = '__all__'


class AvailableSexPreferencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SexPreference
        fields = '__all__'