/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { ImageBackground, StyleSheet, View, ViewStyle } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { ms } from 'react-native-size-matters';

import ButtonBase from '@components/ButtonBase';

export interface PictureProps {
  src?: string;
  style?: ViewStyle;
}

const EmptyPicture = ({
  disabled = false,
  children,
  style = {}
}: {
  disabled?: boolean;
  children?: React.ReactNode;
  style?: ViewStyle;
}) => {
  return (
    <ButtonBase
      disabled={disabled}
      style={{
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#525252',
        ...styles.button,
        ...style
      }}
    >
      {children}
    </ButtonBase>
  );
};

const Picture: React.FC<PictureProps> = ({ src, style = {} }: PictureProps) => {
  const { padding } = style;

  return (
    <View style={style}>
      {src ? (
        <>
          <PanGestureHandler>
            <Animated.View>
              <ButtonBase
                style={{
                  backgroundColor: 'black',
                  opacity: 1,
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
            </Animated.View>
          </PanGestureHandler>
          <EmptyPicture
            style={{
              opacity: 0,
              position: 'absolute',
              top: padding,
              bottom: 0,
              left: padding,
              right: 0
            }}
          />
        </>
      ) : (
        <EmptyPicture>
          <FontAwesome color="#525252" name="plus" size={ms(32)} />
        </EmptyPicture>
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
