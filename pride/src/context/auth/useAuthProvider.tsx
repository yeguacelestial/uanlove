import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { TokenResponse } from 'expo-auth-session';
import { BASE_API_ENDPOINT } from 'react-native-dotenv';

import useAzureAuth from '@hooks/useAzureAuth';
import { WritableUser } from '@shared/User';

import { AuthContextType, DefaultAuthContextState } from './AuthContext';

const useAuthProvider = (): AuthContextType => {
  const { promptAsync, tokenResponse } = useAzureAuth();

  // TODO: Handle affair response
  const [affairResponse, setAffairResponse] = useState({});

  // Login endpoint
  const loginEndpoint = `${BASE_API_ENDPOINT}login-as-student`;

  // sendToAffair sends access token to server
  const sendToAffair = useCallback(
    async (tokenResponse: TokenResponse) => {
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

  const [user, setUser] = useState<AuthContextType['user']>(
    DefaultAuthContextState.user
  );

  // TODO: Implement sign up.
  const signUp = useCallback(async () => {}, []);

  // TODO: Implement sign in.
  const signIn = useCallback(async () => {
    /*
    setUser({
      gender: 'Man',
      name: 'Gabriel Emilio',
      bio: 'Mi bio',
      age: '21',
      email: 'gabriel.emilio@uanl.edu.mx',
      school: 'Facultad de Ingenieria Mecanica y Electrica',
      pictures: [
        'https://image.shutterstock.com/image-photo/head-shot-portrait-smiling-middle-600w-1339318991.jpg',
        'https://i.pinimg.com/originals/69/59/fa/6959fa736605235642d0f057e6cf9795.jpg',
        'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-600w-1640944705.jpg'
      ]
    });
    */

    try {
      const response = await promptAsync();
    } catch (error) {
      console.error(error);
    }
  }, [setUser, promptAsync]);

  // TODO: Implement sign out.
  const signOut = useCallback(async () => {
    // TODO: Error should sign out too.
    setUser(null);
  }, [setUser]);

  const saveUser = useCallback(
    async (writableUser: Partial<WritableUser>) => {
      if (user) {
        setUser({
          ...user,
          ...writableUser
        });
      }
    },
    [user]
  );

  return {
    user,
    signUp,
    signIn,
    signOut,
    saveUser,
    setUser
  };
};

export default useAuthProvider;
