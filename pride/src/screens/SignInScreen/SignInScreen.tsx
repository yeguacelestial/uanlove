// @refresh reset
import React from 'react';
import { ImageSourcePropType, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import useAuth from '@hooks/useAuth';

import Onboarding from './Onboarding';

const messages = [
  {
    title: 'Gente cool, como tú.',
    subtitle: 'Buena vibra.'
  },
  {
    title: 'Alentando la flama del amor.',
    subtitle: 'Y de la verdad...'
  },
  {
    title: 'Solo comunidad universitaria.',
    subtitle: '¿Vamos por unos chilaquiles?'
  }
];

const images: ImageSourcePropType[] = [
  require('../../../assets/onboarding/chat.png'),
  require('../../../assets/onboarding/couple.png'),
  require('../../../assets/onboarding/food.png')
];

const SignInScreen: React.FC = () => {
  const { signIn } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <Onboarding
        bottomColors={['#E96A24', '#FE436D', '#2E409F']}
        images={images}
        messages={messages}
        topColors={['#FAFAFA', '#FAFAFA', '#FBC02E']}
        onSignInPress={() => signIn()}
      />
    </View>
  );
};

export default SignInScreen;
