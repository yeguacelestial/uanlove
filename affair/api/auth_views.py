from allauth.socialaccount.providers.microsoft.views import MicrosoftGraphOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client

from dj_rest_auth.registration.views import SocialLoginView

from config.settings import MICROSOFT_LOGIN_CALLBACK_URL

class MicrosoftLogin(SocialLoginView):
    adapter_class = MicrosoftGraphOAuth2Adapter
    callback_url = MICROSOFT_LOGIN_CALLBACK_URL
    client_class = OAuth2Client