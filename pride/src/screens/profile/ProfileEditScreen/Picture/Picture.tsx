/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { ImageBackground, StyleSheet, View, ViewStyle } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { ms } from 'react-native-size-matters';

import ButtonBase from '@components/ButtonBase';

export interface PictureProps {
  src?: string;
  style?: ViewStyle;
}

const Picture: React.FC<PictureProps> = ({ src, style }: PictureProps) => {
  return (
    <View style={style}>
      {src ? (
        <ButtonBase
          style={{
            backgroundColor: 'black',
            ...styles.button
          }}
        >
          <ImageBackground
            resizeMode="contain"
            source={{ uri: src }}
            style={{
              width: '100%',
              height: '100%'
            }}
          />
        </ButtonBase>
      ) : (
        <ButtonBase
          style={{
            borderWidth: 1,
            borderStyle: 'dashed',
            borderColor: '#525252',
            ...styles.button
          }}
        >
          <FontAwesome color="#525252" name="plus" size={ms(32)} />
        </ButtonBase>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: ms(8),
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  }
});

export default Picture;
