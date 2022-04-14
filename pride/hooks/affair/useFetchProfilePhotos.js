import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import useUserToken from "./useUserToken"

const BASE_API_ENDPOINT = process.env.BASE_API_ENDPOINT;

const useFetchProfilePhotos = () => {
  const { userToken } = useUserToken();
  const [profilePhotos, setProfilePhotos] = useState(null);

  // "profile photos" endpoint
  const availableProfilePhotos = `${BASE_API_ENDPOINT}/user/photos/`;

  const checkProfilePhotos = useCallback(
    async (userToken) => {
      try {
        const serverResponse = await fetch(availableProfilePhotos, {
          method: 'GET',
          headers: {
            Authorization: `Token ${userToken}`
          }
        });

        const responseJson = await serverResponse.json();
        setProfilePhotos(responseJson.results)

        return responseJson;
      } catch (e) {
        // 'Network request failed' is thrown if the server is unreachable
        if (e.message === 'Network request failed') {
          Alert.alert(
            'Error al obtener las fotos de perfil',
            'El servidor está en mantenimiento. Vuelve más tarde.'
          );
        } else {
          Alert.alert('Error al obtener las fotos de perfil', `${e}`);
        }
      }
    },
    [userToken]
  )

  useEffect(() => {
    if (userToken) {
      checkProfilePhotos(userToken);
    }
  }, [userToken]);

  return {
    profilePhotos,
  }
}

export default useFetchProfilePhotos