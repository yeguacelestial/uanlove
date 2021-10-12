import React, { useEffect } from 'react';

import {
  makeRedirectUri,
  useAuthRequest,
  useAutoDiscovery
} from 'expo-auth-session';

import { Button, View } from 'react-native';

import { TENANT_ID, APP_CLIENT_ID } from 'react-native-dotenv';

const AzureAuth: React.FC = () => {
  const discovery = useAutoDiscovery(
    `https://login.microsoftonline.com/${TENANT_ID}/v2.0`
  );

  // Request
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
    alert(`[D] RESPONSE => ${JSON.stringify(response)}`);
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
