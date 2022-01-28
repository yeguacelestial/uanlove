import { useState, useEffect } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

const useUserToken = () => {
  const [userToken, setUserToken] = useState(null);

  const checkUserToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@userToken');

      if (token != null) {
        setUserToken(token);
      }
    } catch(err) {
      console.log("@checkUserToken error: ", err);
    }
  }

  useEffect(() => {
    checkUserToken();
  }, []);

  return { userToken }
};

export default useUserToken;