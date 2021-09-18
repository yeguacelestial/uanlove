// @refresh reset
import React, { useEffect, useState } from 'react';
import {
  Pressable,
  Text,
  PressableProps,
  View,
  ActivityIndicator
} from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';

export interface Button3DProps extends PressableProps {
  text: string;
  animationDuration?: number;
  elevation?: number;
  topColor?: string;
  textColor?: string;
  bottomColor?: string;
  overrideColors?: boolean;
  fontSize?: number;
  state?: 'success' | 'error' | 'busy' | 'default';
}

const Button3D: React.FC<Button3DProps> = ({
  animationDuration = 70,
  elevation = ms(7),
  topColor = '#fbc02e',
  bottomColor = '#e1a205',
  textColor = 'white',
  overrideColors = false,
  fontSize = ms(12),
  state = 'default',
  text,
  style,
  onPressIn,
  onPressOut,
  ...props
}: Button3DProps) => {
  const translateY = useSharedValue(0);

  const [colors, setColors] = useState({
    topColor,
    bottomColor,
    textColor
  });

  const topStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value
        }
      ]
    };
  });

  const getContent = () => {
    switch (state) {
      case 'success':
        return (
          <FontAwesome
            color={colors.textColor}
            name="check"
            size={fontSize * 2}
          />
        );

      case 'error':
        return (
          <FontAwesome
            color={colors.textColor}
            name="close"
            size={fontSize * 2}
          />
        );

      case 'busy':
        return (
          <ActivityIndicator color={colors.textColor} size={fontSize * 2} />
        );

      default:
        return (
          <Text style={[{ color: colors.textColor, fontSize }, styles.text]}>
            {text}
          </Text>
        );
    }
  };

  useEffect(() => {
    let colors = {
      topColor,
      bottomColor,
      textColor
    };

    if (!overrideColors) {
      switch (state) {
        case 'success':
          colors = {
            topColor: '#52B542',
            bottomColor: '#539B47',
            textColor: 'white'
          };
          break;

        case 'error':
          colors = {
            topColor: '#e83333',
            bottomColor: '#bd2a2a',
            textColor: 'white'
          };
          break;
      }
    }

    setColors(colors);
  }, [state, overrideColors, topColor, bottomColor, textColor]);

  return (
    <Pressable
      disabled={state === 'busy'}
      style={[style, { paddingBottom: elevation }]}
      onPressIn={e => {
        translateY.value = withTiming(elevation, {
          duration: animationDuration
        });

        if (onPressIn) onPressIn(e);
      }}
      onPressOut={e => {
        translateY.value = withTiming(0, {
          duration: animationDuration
        });

        if (onPressOut) onPressOut(e);
      }}
      {...props}
    >
      <Animated.View
        style={[
          styles.top,
          topStyle,
          {
            height: fontSize * 2.5,
            backgroundColor: colors.topColor
          }
        ]}
      >
        {getContent()}
      </Animated.View>
      <View
        style={[
          {
            top: elevation,
            backgroundColor: colors.bottomColor
          },
          styles.bottom
        ]}
      />
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  top: {
    width: '100%',
    borderRadius: '5@ms',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom: {
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    zIndex: -1,
    borderRadius: '5@ms'
  },
  text: {
    fontWeight: 'bold'
  }
});

export default Button3D;
