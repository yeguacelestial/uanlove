import { useEffect } from 'react';

import {
  makeRedirectUri,
  useAuthRequest,
  useAutoDiscovery
} from 'expo-auth-session';

const useAzureAuth = () => {
  const APP_CLIENT_ID = process.env.APP_CLIENT_ID;
  const TENANT_ID = process.env.TENANT_ID;

  const discovery = useAutoDiscovery(
    `https://login.microsoftonline.com/${TENANT_ID}/v2.0`
  );

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: APP_CLIENT_ID,
      scopes: ['openid', 'profile', 'email', 'offline_access'],
      redirectUri: makeRedirectUri({
        /*
          scheme: The URI [scheme]:// to be used in bare and standalone. 
          If undefined, the scheme property of your app.json or 
          app.config.js will be used instead. 
        */
        scheme: 'your.app'
      })
    },
    discovery
  );

  useEffect(() => {
    if (response) console.log(`[D] RESPONSE => ${JSON.stringify(response)}`);
  }, [response]);  

  return {
    request,
    tokenResponse: response,
    promptAsync
  };
};

export default useAzureAuth;