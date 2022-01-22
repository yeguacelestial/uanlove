import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './components/HomeScreen';
import Onboarding from './components/Onboarding';
import { useEffect, useState } from 'react';


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
    <View style={styles.container}>
      {loading ? <Loading/> : viewedOnboarding ? <HomeScreen/> : <Onboarding/>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
