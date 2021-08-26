import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '@screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthNavigator: React.FC = () => {
  return (
    <Navigator>
      <Screen
        component={SignIn}
        name="sign-in"
        options={{
          title: 'Sign In'
        }}
      />
    </Navigator>
  );
};

export default AuthNavigator;
