import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '@screens/SignInScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthNavigator: React.FC = () => {
  return (
    <Navigator>
      <Screen
        component={SignInScreen}
        name="sign-in"
        options={{
          title: 'Sign In',
          headerShown: false
        }}
      />
    </Navigator>
  );
};

export default AuthNavigator;
