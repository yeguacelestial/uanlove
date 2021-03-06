import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import useUserToken from "./useUserToken"

const BASE_API_ENDPOINT = process.env.BASE_API_ENDPOINT;

const useUserMe = () => {
  const {userToken} = useUserToken();
  const [fetchedUserInfo, setFetchedUserInfo] = useState(null);

  // "me" endpoint
  const meEndpoint = `${BASE_API_ENDPOINT}/user/me/`;

  const checkUserMe = useCallback(
    async () => {
      try {
        const serverResponse = await fetch(meEndpoint, {
          method: 'GET',
          headers: {
            Authorization: `Token ${userToken}`
          }
        });

        const responseJson = await serverResponse.json();

        setFetchedUserInfo(responseJson);

        return responseJson;
      } catch (e) {
        // 'Network request failed' is thrown if the server is unreachable
        if (e.message === 'Network request failed') {
          Alert.alert(
            'Error al obtener la información de tu usuario',
            'El servidor está en mantenimiento. Vuelve más tarde.'
          );
        } else {
          Alert.alert('Error al obtener la información de tu usuario', `${e}`);
        }
      }
    },
    [userToken]
  )

  useEffect(() => {
    if(userToken) {
      checkUserMe();
    }
  }, [userToken]);

  return {
    fetchedUserInfo,
  }
}

export default useUserMe
