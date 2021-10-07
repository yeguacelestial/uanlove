import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useAuth from '@hooks/useAuth';
import useTheme from '@hooks/useTheme';
import AppNavigator from '@navigation/AppNavigator';
import AuthNavigator from '@navigation/AuthNavigator';

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation: React.FC = () => {
  const { user } = useAuth();
  const { navigation } = useTheme();

  return (
    <NavigationContainer theme={navigation}>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {user ? (
          <Screen component={AppNavigator} name="app-navigator" />
        ) : (
          <Screen component={AuthNavigator} name="auth-navigator" />
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
