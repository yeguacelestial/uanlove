from django.db import models


class FacultyManager(models.Manager):
    def create_faculty(self, name, campus):
        faculty = self.create(name=name, campus=campus)
        return faculty