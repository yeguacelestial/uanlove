import React, { useEffect } from 'react';
import { Button, View } from 'react-native';

import {
  makeRedirectUri,
  useAuthRequest,
  useAutoDiscovery,
  exchangeCodeAsync
} from 'expo-auth-session';
import { TENANT_ID, APP_CLIENT_ID, CLIENT_SECRET } from 'react-native-dotenv';

const AzureAuth: React.FC = () => {
  const discovery = useAutoDiscovery(
    `https://login.microsoftonline.com/${TENANT_ID}/v2.0`
    // `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/authorize?client_id=${APP_CLIENT_ID}&response_type=code&redirect_uri=exp://192.168.1.86:19000&response_mode=query&scope=openid%20offline_access%20profile%20email`
  );

  // Request
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: APP_CLIENT_ID,
      scopes: ['openid', 'profile', 'email', 'offline_access'],
      redirectUri: makeRedirectUri({
        scheme: 'uanlove'
      })
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      // alert(`[D] RESPONSE => ${JSON.stringify(response)}`);
      const discoveryDocument = exchangeCodeAsync(
        {
          clientId: APP_CLIENT_ID,
          code: response.params.code,
          redirectUri: makeRedirectUri({
            scheme: 'uanlove'
          }),
          clientSecret: CLIENT_SECRET,
          scopes: ['openid', 'profile', 'email', 'offline_access']
        },
        {
          tokenEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`
        }
      );

      console.log(discoveryDocument);
    }
  }, [response]);

  return (
    <View
      style={{
        paddingTop: 150
      }}
    >
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
};

export default AzureAuth;
