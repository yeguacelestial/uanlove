import { useCallback, useState, useEffect } from 'react';
import { Alert } from 'react-native';

import useAzureAuth from './useAzureAuth';

const useAuthProvider = () => {
  const BASE_API_ENDPOINT = process.env.BASE_API_ENDPOINT;

  const { promptAsync, tokenResponse } = useAzureAuth();

  // TODO: Handle affair response
  const [affairResponse, setAffairResponse] = useState({});

  // Login endpoint
  const loginEndpoint = `${BASE_API_ENDPOINT}login-as-student`;

  // sendToAffair sends access token to server
  const sendToAffair = useCallback(
    async (tokenResponse) => {
      try {
        // Do POST request to login endpoint, including access token in body
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

        const responseJson = await serverResponse.json();

        // If response is succesful, set the response and alert user
        setAffairResponse(responseJson);
        Alert.alert('Affair response', JSON.stringify(affairResponse));

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
