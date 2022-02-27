import { useCallback, useState } from "react";
import { Alert } from "react-native";
import useUserToken from "./useUserToken"

const BASE_API_ENDPOINT = process.env.BASE_API_ENDPOINT;

const useFetchFaculty = () => {
  const { userToken } = useUserToken();
  const [fetchedFaculty, setFetchedFaculty] = useState(null);

  // "faculties" endpoint
  const facultiesEndpoint = `${BASE_API_ENDPOINT}/school/faculties`;

  const checkFaculty = useCallback(
    async (facultyId) => {
      try {
        const serverResponse = await fetch(`${facultiesEndpoint}/${facultyId}/`, {
          method: 'GET',
          headers: {
            Authorization: `Token ${userToken}`
          }
        });

        const responseJson = await serverResponse.json();
        setFetchedFaculty(responseJson)

        return responseJson;
      } catch (e) {
        // 'Network request failed' is thrown if the server is unreachable
        if (e.message === 'Network request failed') {
          Alert.alert(
            'Error al obtener la facultad',
            'El servidor está en mantenimiento. Vuelve más tarde.'
          );
        } else {
          Alert.alert('Error al obtener la facultad', `${e}`);
        }
      }
    },
    [userToken]
  )

  return {
    fetchedFaculty,
    checkFaculty
  }
}

export default useFetchFaculty