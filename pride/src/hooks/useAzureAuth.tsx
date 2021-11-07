import { useEffect, useState } from 'react';

import {
  makeRedirectUri,
  useAuthRequest,
  useAutoDiscovery,
  exchangeCodeAsync,
  CodeChallengeMethod,
  TokenResponse
} from 'expo-auth-session';
import { TENANT_ID, APP_CLIENT_ID } from 'react-native-dotenv';
import { pkceChallenge } from 'react-native-pkce-challenge';

const challenge = pkceChallenge();

export default function useAzureAuth() {
  const [azureAuthErr, setAzureAuthErr] = useState<Error | null>(null);

  const discovery = useAutoDiscovery(
    `https://login.microsoftonline.com/${TENANT_ID}/v2.0`
  );

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: APP_CLIENT_ID,
      scopes: ['openid', 'profile', 'email', 'offline_access', 'User.Read'],
      redirectUri: makeRedirectUri({
        scheme: 'uanlove'
      }),
      codeChallenge: challenge.codeChallenge,
      codeChallengeMethod: CodeChallengeMethod.S256
    },
    discovery
  );

  const [tokenResponse, setTokenResponse] = useState<TokenResponse>();

  useEffect(() => {
    if (response?.type === 'success') {
      const exchangeResponse = exchangeCodeAsync(
        {
          clientId: APP_CLIENT_ID,
          code: response.params.code,
          redirectUri: makeRedirectUri({
            scheme: 'uanlove'
          }),
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
          setAzureAuthErr(e);
        });
    }
  }, [response, request?.codeVerifier, tokenResponse]);

  return { request, response, promptAsync, tokenResponse, azureAuthErr };
}
