import React from 'react';
import { View, Dimensions } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';

interface BackgroundSignInProps {
  topColor?: string;
  bottomColor?: string;
}

export const BackgroundSignIn: React.FC<BackgroundSignInProps> = ({
  topColor = '#FBC02E',
  bottomColor = '#2E409F'
}) => {
  const { width } = Dimensions.get('screen');

  return (
    <View style={{ width, overflow: 'hidden' }}>
      <View style={[styles.blueBG, { backgroundColor: bottomColor }]} />
      <View style={[styles.yellowBG, { backgroundColor: topColor }]} />
    </View>
  );
};

const styles = ScaledSheet.create({
  blueBG: {
    flex: 1,
    backgroundColor: '#2E409F'
  },
  yellowBG: {
    height: 500,
    width: 600,
    left: -50,
    top: -85,
    transform: [{ rotate: '15deg' }],
    position: 'absolute',
    backgroundColor: '#FBC02E'
  }
});
