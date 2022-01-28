import { useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from './screens/Onboarding';
import CustomBottomTabBar from './navigation/CustomBottomTabBar';


const Stack = createStackNavigator();

export default function App() {
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