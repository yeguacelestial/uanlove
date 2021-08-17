import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@screens/Home';
import Profile from '@screens/Profile';
import FloatingTabBar from '@components/FloatingTabBar';

const { Navigator, Screen } = createBottomTabNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator tabBar={FloatingTabBar}>
        <Screen component={Home} name="Home" />
        <Screen component={Profile} name="Profile" />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
