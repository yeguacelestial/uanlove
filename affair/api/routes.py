from rest_framework import routers

from users import views as user_views

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

router = routers.DefaultRouter()
router.register(r'me', user_views.Me)