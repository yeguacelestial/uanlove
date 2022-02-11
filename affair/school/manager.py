from django.db import models


class FacultyManager(models.Manager):
    def create_faculty(self, name, campus):
        faculty = self.create(name=name, campus=campus)
        return faculty


class StudentTypeManager(models.Manager):
    def create_student_type(self, name):
        student_type = self.create(name=name)
        return student_type