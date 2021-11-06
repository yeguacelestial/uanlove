import { useEffect } from 'react';

import {
  makeRedirectUri,
  useAuthRequest,
  useAutoDiscovery,
  exchangeCodeAsync,
  CodeChallengeMethod,
} from 'expo-auth-session';
import { TENANT_ID, APP_CLIENT_ID, CLIENT_SECRET } from 'react-native-dotenv';
import { pkceChallenge } from 'react-native-pkce-challenge';

const challenge = pkceChallenge();

export default function useAzureAuth() {
  // TODO: Get url from .env
  // const discovery = useAutoDiscovery(
  //   `https://login.microsoftonline.com/${TENANT_ID}/v2.0`
  // );

  // const [request, response, promptAsync] = useAuthRequest(
  //   {
  //     clientId: APP_CLIENT_ID,
  //     scopes: ['openid', 'profile', 'email', 'offline_access'],
  //     redirectUri: makeRedirectUri({
  //       scheme: 'your.app'
  //     })
  //   },
  //   discovery
  // );

  // useEffect(() => {
  //   if (response) console.log(`[D] RESPONSE => ${JSON.stringify(response)}`);
  // }, [response]);

  const discovery = useAutoDiscovery(
    `https://login.microsoftonline.com/${TENANT_ID}/v2.0`
  );

  // Request
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: APP_CLIENT_ID,
      scopes: ['openid', 'profile', 'email', 'offline_access'],
      redirectUri: makeRedirectUri({
        scheme: 'uanlove'
      }),
      codeChallenge: challenge.codeChallenge,
      codeChallengeMethod: CodeChallengeMethod.S256
    },
    discovery
  );

  useEffect(() => {
    let codeVerifierString = '';

    const codeVerifier = request?.codeVerifier;
    if (codeVerifier) {
      codeVerifierString = codeVerifier;
      console.log(`[D] CODE VERIFIER => ${codeVerifier}`);
    }

    if (response?.type === 'success') {
      const discoveryDocument = exchangeCodeAsync(
        {
          clientId: APP_CLIENT_ID,
          code: response.params.code,
          redirectUri: makeRedirectUri({
            scheme: 'uanlove'
          }),
          // clientSecret: CLIENT_SECRET,
          scopes: ['openid', 'profile', 'email', 'offline_access'],
          extraParams: {
            code_verifier: codeVerifierString
          }
        },
        {
          tokenEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`
        }
      );

      discoveryDocument
        .then(res => {
          console.log(`[D] DISCOVERY => ${JSON.stringify(res)}\n`);
        })
        .catch(err => {
          console.log(`[D] DISCOVERY => ${JSON.stringify(err)}\n`);
          console.log(`[D] CODE CHALLENGE => ${challenge.codeChallenge}`);
          console.log(`[D] CODE VERIFIER => ${challenge.codeVerifier}`);
        });
    }
  }, [response]);

  return { request, response, promptAsync };
}
