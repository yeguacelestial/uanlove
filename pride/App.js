import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Onboarding from './screens/Onboarding';
import HomeScreen from './screens/Onboarding/components/HomeScreen';

import { MainColours, MainStyles } from './styles/core';
import { NavigationContainer } from '@react-navigation/native';
import CustomBottomTabBar from './navigation/CustomBottomTabBar';

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

  return (
    // <View style={MainStyles.container}>
    //   <Onboarding/>
    //   {/* {loading ? <Loading/> : viewedOnboarding ? <HomeScreen/> : <Onboarding/>} */}
    // </View>
    <NavigationContainer>
      <StatusBar style="auto" />
      <Onboarding/>
      {/* <CustomBottomTabBar/> */}
    </NavigationContainer>
  );
}