from rest_framework import routers

from users import views as user_views


router = routers.DefaultRouter()
router.register(r'me', user_views.Me)