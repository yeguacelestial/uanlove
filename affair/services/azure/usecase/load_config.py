from services.azure.usecase.scheme import scheme

async def load_config() -> None:
    """
    Load OpenID config on startup.
    """
    await scheme.openid_config.load_config()