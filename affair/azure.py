
import os
import uvicorn

from fastapi import FastAPI, Security
from fastapi.middleware.cors import CORSMiddleware

from api.root.handler import root

from services.azure.usecase.settings import Settings
from services.azure.usecase.scheme import scheme
from services.azure.usecase.load_config import load_config

from dotenv import load_dotenv

load_dotenv()

azure_settings = Settings()

app = FastAPI(
    swagger_ui_oauth2_redirect_url=os.getenv("SWAGGER_UI_OAUTH2_REDIRECT_URL"),
    swagger_ui_init_oauth={
        'usePkceWithAuthorizationCodeGrant': True,
        'clientId': azure_settings.OPENAPI_CLIENT_ID,
    }
)

# Handle CORS
if azure_settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in azure_settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*'],
    )

# Event handlers
app.add_event_handler("startup", load_config)

# Endpoints
app.add_api_route(
    path="/",
    dependencies=[Security(scheme)],
    endpoint=root
)

if __name__ == "__main__":
    uvicorn.run('main:app', reload=True)