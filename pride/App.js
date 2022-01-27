import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Onboarding from './screens/Onboarding';
import HomeScreen from './screens/Onboarding/components/HomeScreen';

import { MainColours, MainStyles } from './styles/core';
import { NavigationContainer } from '@react-navigation/native';
import CustomBottomTabBar from './navigation/CustomBottomTabBar';
import useAuthProvider from './screens/Onboarding/hooks/useAuthProvider';

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large"/>
    </View>
  )
}


export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const [userToken, setUserToken] = useState(null);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding')

      if (value != null) {
        setViewedOnboarding(true);
      }
    } catch(err) {
      console.log("@checkOnboarding error: ", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkOnboarding()
  }, [])

  const checkUserToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@userToken');

      if (token != null) {
        setUserToken(token);
      }
    } catch(err) {
      console.log("@checkUserToken error: ", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkUserToken()
    console.log("@userToken: ", userToken)
  }, [userToken])

  return (
    // <View style={MainStyles.container}>
    //   <Onboarding/>
    //   {/* {loading ? <Loading/> : viewedOnboarding ? <HomeScreen/> : <Onboarding/>} */}
    // </View>
    <NavigationContainer>
      <StatusBar style="auto" />
      {/* <Onboarding/> */}
      { userToken ? <CustomBottomTabBar/> : <Onboarding/> }
      {/* <CustomBottomTabBar/> */}
    </NavigationContainer>
  );
}