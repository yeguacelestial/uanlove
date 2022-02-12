from rest_framework import routers

from users import views as user_views
from school import views as school_views

# users
user_router = routers.DefaultRouter()
user_router.register(r'me', user_views.MeViewSet)
user_router.register(r'available-genders', user_views.AvailableGendersViewSet)
user_router.register(r'available-sex-preferences', user_views.AvailableSexPreferencesViewSet)

# school
school_router = routers.DefaultRouter()
school_router.register(r'degrees', school_views.DegreesViewSet)
school_router.register(r'terms', school_views.TermsViewSet)
school_router.register(r'student-types', school_views.StudentTypeViewSet)
school_router.register(r'faculties', school_views.FacultyViewSet)