import { useCallback, useState, useEffect } from 'react';
import { Alert } from 'react-native';

import useAzureAuth from './useAzureAuth';

const BASE_API_ENDPOINT = process.env.BASE_API_ENDPOINT;

const useAuthProvider = () => {
  const { response, promptAsync, tokenResponse, azureAuthError } = useAzureAuth();

  // TODO: Handle affair response
  const [affairResponse, setAffairResponse] = useState({});

  // Login endpoint
  const loginEndpoint = `${BASE_API_ENDPOINT}login-as-student`;

  // sendToAffair sends access token to server
  const sendToAffair = useCallback(
    async (tokenResponse) => {
      try {
        const serverResponse = await fetch(loginEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            access_token: tokenResponse.accessToken,
            id_token: tokenResponse.idToken
          })
        });

        console.log("[D] ACCESS TOKEN => ", tokenResponse.accessToken);
        console.log("[D] ID TOKEN => ", tokenResponse.idToken);
        console.log("[D] CODE => ", tokenResponse.code);

        const responseJson = await serverResponse.json();
        
        console.log("[D] SERVER RESPONSE => ", responseJson)

        setAffairResponse(responseJson);
        Alert.alert('Affair response', JSON.stringify(responseJson));

        return responseJson;
      } catch (e) {
        // 'Network request failed' is thrown if the server is unreachable
        if (e.message === 'Network request failed') {
          Alert.alert(
            'Error al iniciar sesión',
            'El servidor está en mantenimiento. Vuelve más tarde.'
          );
        } else {
          Alert.alert('Error al iniciar sesión', `${e}`);
        }
      }
    },
    [loginEndpoint]
  );

  // If there is a tokenResponse, send it to back-end server
  useEffect(() => {
    if (tokenResponse) {
      sendToAffair(tokenResponse);
    }
  }, [sendToAffair, tokenResponse]);

  return { promptAsync, affairResponse };
};

export default useAuthProvider;
