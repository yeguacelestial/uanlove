from rest_framework import routers

from users import views as user_views

# users
user_router = routers.DefaultRouter()

user_router.register(r'me', user_views.MeViewSet)
user_router.register(r'available-genders', user_views.AvailableGendersViewSet)
user_router.register(r'available-sex-preferences', user_views.AvailableSexPreferences)

# school
school_router = routers.DefaultRouter()