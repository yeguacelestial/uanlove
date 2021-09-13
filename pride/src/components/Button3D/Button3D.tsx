// @refresh reset
import React from 'react';
import { Pressable, Text, PressableProps, View } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

export interface Button3DProps extends PressableProps {
  text: string;
  animationDuration?: number;
  backdropHeight?: number;
  backgroundColor?: string;
  color?: string;
  backdropColor?: string;
  fontSize?: number;
  loading?: boolean;
}

// TODO: Add loading animation.

const Button3D: React.FC<Button3DProps> = ({
  animationDuration = 70,
  backdropHeight = ms(7),
  backgroundColor = '#fbc02e',
  backdropColor = '#e1a205',
  color = 'white',
  fontSize = ms(12),
  loading = false,
  text,
  style,
  onPressIn,
  onPressOut,
  ...props
}: Button3DProps) => {
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value
        }
      ]
    };
  });

  return (
    <Pressable
      disabled={loading}
      style={[style, { paddingBottom: backdropHeight }]}
      onPressIn={e => {
        translateY.value = withTiming(backdropHeight, {
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
          {
            backgroundColor
          },
          styles.button,
          animatedStyle
        ]}
      >
        <Text style={[{ color, fontSize }, styles.text]}>
          {loading ? 'Loading...' : text}
        </Text>
      </Animated.View>
      <View
        style={[
          {
            top: backdropHeight,
            backgroundColor: backdropColor
          },
          styles.backdrop
        ]}
      />
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  button: {
    width: '100%',
    padding: '10@ms',
    borderRadius: '5@ms',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold'
  },
  backdrop: {
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    zIndex: -1,
    borderRadius: '5@ms'
  }
});

export default Button3D;
