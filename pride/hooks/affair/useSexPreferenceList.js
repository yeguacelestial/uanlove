import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import useUserToken from "./useUserToken"

const BASE_API_ENDPOINT = process.env.BASE_API_ENDPOINT;

const useSexPreferenceList = () => {
  const { userToken } = useUserToken();
  const [sexPreferenceList, setSexPreferenceList] = useState(null);

  // "sex preferences" endpoint
  const availableSexPreferencesEndpoint = `${BASE_API_ENDPOINT}/user/available-sex-preferences/`;

  const checkSexPreferenceList = useCallback(
    async (userToken) => {
      try {
        const serverResponse = await fetch(availableSexPreferencesEndpoint, {
          method: 'GET',
          headers: {
            Authorization: `Token ${userToken}`
          }
        });

        const responseJson = await serverResponse.json();
        setSexPreferenceList(responseJson.results)

        return responseJson;
      } catch (e) {
        // 'Network request failed' is thrown if the server is unreachable
        if (e.message === 'Network request failed') {
          Alert.alert(
            'Error al obtener la lista de preferencias',
            'El servidor está en mantenimiento. Vuelve más tarde.'
          );
        } else {
          Alert.alert('Error al obtener la lista de preferencias', `${e}`);
        }
      }
    },
    [userToken]
  )

  useEffect(() => {
    if (userToken) {
      checkSexPreferenceList(userToken);
    }
  }, [userToken]);

  return {
    sexPreferenceList,
  }
}

export default useSexPreferenceList