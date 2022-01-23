import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Onboarding from './views/Onboarding';
import HomeScreen from './views/Onboarding/components/HomeScreen';

import { MainColours, MainStyles } from './styles/core';

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
    <View style={MainStyles.container}>
      {loading ? <Loading/> : viewedOnboarding ? <HomeScreen/> : <Onboarding/>}
      <StatusBar style="auto" />
    </View>
  );
}