// @refresh reset
import useAuth from '@hooks/useAuth';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Onboarding from './Onboarding';

const messages = [
  {
    title: 'Alentando la flama del amor.',
    subtitle: 'Y de la verdad...'
  },
  {
    title: 'Hola mundo.',
    subtitle: 'Hello world...'
  },
  {
    title: 'Te la.',
    subtitle: 'Comes...'
  }
];

const SignInScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();

  const { signIn } = useAuth();

  return (
    <View style={{ flex: 1, paddingTop: top }}>
      <Onboarding
        bottomColors={['#7F7B83', '#FE436D', '#2E409F']}
        messages={messages}
        topColors={['#26C0A4', '#FAFAFA', '#FBC02E']}
      />
    </View>
  );
};

export default SignInScreen;
