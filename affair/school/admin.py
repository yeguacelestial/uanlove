from django.contrib import admin

from school.models import Campus, Degree, Faculty, StudentType, Term


admin.site.register(Campus)
admin.site.register(Faculty)
admin.site.register(Degree)
admin.site.register(Term)
admin.site.register(StudentType)