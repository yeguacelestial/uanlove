import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import useUserToken from "./useUserToken"

const BASE_API_ENDPOINT = process.env.BASE_API_ENDPOINT;

const useTermList = () => {
  const { userToken } = useUserToken();
  const [termList, setTermList] = useState(null);

  // "terms" endpoint
  const termsEndpoint = `${BASE_API_ENDPOINT}/school/terms/`;

  const checkTermList = useCallback(
    async () => {
      try {
        const serverResponse = await fetch(termsEndpoint, {
          method: 'GET',
          headers: {
            Authorization: `Token ${userToken}`
          }
        });

        const responseJson = await serverResponse.json();
        setTermList(responseJson.results)

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
      checkTermList(userToken);
    }
  }, [userToken]);

  return {
    termList,
  }
}

export default useTermList