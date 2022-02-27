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

  const destroyUserToken = async () => {
    try {
      await AsyncStorage.removeItem('@userToken');
      setUserToken(null);
    } catch(err) {
      console.log("@destroyUserToken error: ", err);
    }
  }

  useEffect(() => {
    if (userToken == null) {
      checkUserToken();
    }
  }, [userToken]);

  return { userToken, destroyUserToken }
};

export default useUserToken;