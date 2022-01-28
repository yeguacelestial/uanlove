import { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from './screens/Onboarding';
import CustomBottomTabBar from './navigation/CustomBottomTabBar';


const Stack = createStackNavigator();

export default function App() {

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
    checkUserToken()
    console.log("@userToken: ", userToken)
  }, [userToken])

  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="CustomBottomTabBar" component={CustomBottomTabBar} options={{
          headerShown: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}