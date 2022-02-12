import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import useUserToken from "./useUserToken"

const BASE_API_ENDPOINT = process.env.BASE_API_ENDPOINT;

const useGenderList = () => {
  const { userToken } = useUserToken();
  const [genderList, setGenderList] = useState(null);

  // "available genders" endpoint
  const availableGendersEndpoint = `${BASE_API_ENDPOINT}/user/available-genders/`;

  const checkGenderList = useCallback(
    async () => {
      try {
        const serverResponse = await fetch(availableGendersEndpoint, {
          method: 'GET',
          headers: {
            Authorization: `Token ${userToken}`
          }
        });

        const responseJson = await serverResponse.json();
        setGenderList(responseJson.results)

        return responseJson;
      } catch (e) {
        // 'Network request failed' is thrown if the server is unreachable
        if (e.message === 'Network request failed') {
          Alert.alert(
            'Error al obtener la lista de géneros',
            'El servidor está en mantenimiento. Vuelve más tarde.'
          );
        } else {
          Alert.alert('Error al obtener la lista de géneros', `${e}`);
        }
      }
    },
    [userToken]
  )

  useEffect(() => {
    if (userToken) {
      checkGenderList(userToken);
    }
  }, [userToken]);

  return {
    genderList,
  }
}

export default useGenderList