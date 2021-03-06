import uuid

from django.db import models

from school.manager import FacultyManager, StudentTypeManager


class Campus(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Faculty(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    campus = models.ForeignKey(Campus, on_delete=models.CASCADE)

    objects = FacultyManager()

    def __str__(self):
        return self.name


class Degree(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Term(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4, editable=False)
    number = models.PositiveSmallIntegerField()

    def __str__(self):
        return str(self.number)


class StudentType(models.Model):
    id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)

    objects = StudentTypeManager()

    def __str__(self):
        return self.name
