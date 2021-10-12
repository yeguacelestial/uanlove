import { useEffect } from 'react';

import {
  makeRedirectUri,
  useAuthRequest,
  useAutoDiscovery
} from 'expo-auth-session';
// TODO: Fix this error.
import { TENANT_ID, APP_CLIENT_ID } from 'react-native-dotenv';

export default function useAzureAuth() {
  // TODO: Get url from .env
  const discovery = useAutoDiscovery(
    `https://login.microsoftonline.com/${TENANT_ID}/v2.0`
  );

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: APP_CLIENT_ID,
      scopes: ['openid', 'profile', 'email', 'offline_access'],
      redirectUri: makeRedirectUri({
        scheme: 'your.app'
      })
    },
    discovery
  );

  useEffect(() => {
    if (response) console.log(`[D] RESPONSE => ${JSON.stringify(response)}`);
  }, [response]);

  return { request, response, promptAsync };
}
