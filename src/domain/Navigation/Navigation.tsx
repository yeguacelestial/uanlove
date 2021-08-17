import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen component={Home} name="Home" />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
