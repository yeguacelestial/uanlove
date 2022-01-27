import { useCallback, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import useAzureAuth from './useAzureAuth';

const BASE_API_ENDPOINT = process.env.BASE_API_ENDPOINT;

const useAuthProvider = () => {
  const { response, promptAsync, tokenResponse, azureAuthError } = useAzureAuth();

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

        const responseJson = await serverResponse.json();
        
        console.log("[D] KEY => ", responseJson.key)

        if (responseJson?.key) {
          try {
            await AsyncStorage.setItem('@userToken', responseJson.key);
          } catch (err) {
            Alert.alert(
              'Error al iniciar sesión',
              'No se pudo validar tu cuenta. Por favor, intenta de nuevo.',
            );
          }
        }
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

  // If there is a tokenResponse from azure, send it to back-end server
  useEffect(() => {
    if (tokenResponse) {
      sendToAffair(tokenResponse);
    }
  }, [sendToAffair, tokenResponse]);

  return { promptAsync };
};

export default useAuthProvider;
