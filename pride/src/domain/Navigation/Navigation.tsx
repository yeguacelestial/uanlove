import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from '@context/Auth/hooks';

import AppNavigator from '@navigation/AppNavigator';
import AuthNavigator from '@navigation/AuthNavigator';

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation: React.FC = () => {
  const { authenticated } = useAuth();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {authenticated ? (
          <Screen component={AppNavigator} name="app-navigator" />
        ) : (
          <Screen component={AuthNavigator} name="auth-navigator" />
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
