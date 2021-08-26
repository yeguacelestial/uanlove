import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '@context/Auth/hooks';

import AppNavigator from '@navigation/AppNavigator';
import AuthNavigator from '@navigation/AuthNavigator';

const Navigation: React.FC = () => {
  const { authenticated } = useAuth();

  return (
    <NavigationContainer>
      {authenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
