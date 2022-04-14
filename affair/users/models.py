import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models
from school.models import Degree, Faculty, StudentType

from users.manager import CustomUserManager


class Gender(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class SexPreference(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class User(AbstractUser):
    # Default user model
    username = models.CharField(unique=False, max_length=150, blank=True, null=True)
    email = models.EmailField('email address', unique=True)

    # Custom fields
    first_time_login = models.BooleanField(default=True)
    birthday = models.DateField(null=True, blank=True)
    age = models.PositiveIntegerField(null=True, blank=True)
    gender = models.ForeignKey(Gender, on_delete=models.CASCADE, null=True, blank=True)
    sex_preference = models.ManyToManyField(SexPreference, blank=True)
    location = models.CharField(max_length=150, null=True, blank=True)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE, null=True, blank=True)
    student_type = models.ForeignKey(StudentType, on_delete=models.CASCADE, null=True, blank=True)
    term = models.PositiveSmallIntegerField(null=True, blank=True)
    degree = models.ForeignKey(Degree, on_delete=models.CASCADE, null=True, blank=True)
    bio = models.CharField(max_length=250, null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email


class ProfilePhoto(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    photo_url = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.user.email