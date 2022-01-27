import { useEffect, useState } from 'react';

import {
  makeRedirectUri,
  useAuthRequest,
  useAutoDiscovery,
  exchangeCodeAsync,
  CodeChallengeMethod,
} from 'expo-auth-session';

import { pkceChallenge } from 'react-native-pkce-challenge';

const APP_CLIENT_ID = process.env.APP_CLIENT_ID;
const TENANT_ID = process.env.TENANT_ID;

const challenge = pkceChallenge();

const useAzureAuth = () => {
  const [azureAuthError, setAzureAuthError] = useState(null);
  const [tokenResponse, setTokenResponse] = useState(null);

  const discovery = useAutoDiscovery(
    `https://login.microsoftonline.com/${TENANT_ID}/v2.0`
  );
  
  const redirectUri = makeRedirectUri({
    /*
      scheme: The URI [scheme]:// to be used in bare and standalone. 
      If undefined, the scheme property of your app.json or 
      app.config.js will be used instead. 
    */
    scheme: 'pride',
  })

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: APP_CLIENT_ID,
      scopes: ['openid', 'profile', 'email', 'offline_access', 'User.Read'],
      redirectUri,
      codeChallenge: challenge.codeChallenge,
      codeChallengeMethod: CodeChallengeMethod.S256
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const exchangeResponse = exchangeCodeAsync(
        {
          clientId: APP_CLIENT_ID,
          code: response.params.code,
          redirectUri,
          scopes: ['openid', 'profile', 'email', 'offline_access', 'User.Read'],
          extraParams: {
            code_verifier: request?.codeVerifier ? request.codeVerifier : ''
          }
        },
        {
          tokenEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`
        }
      );

      exchangeResponse
        .then(res => {
          if (res.accessToken){
            setTokenResponse(res);
          }
        })
        .catch(e => {
          setAzureAuthError(e);
        });
    }
  }, [response, request?.codeVerifier, tokenResponse]);  

  return {
    request,
    response,
    promptAsync,
    tokenResponse,
    azureAuthError,
  };
};

export default useAzureAuth;