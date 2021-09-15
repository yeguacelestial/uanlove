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
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';

export interface Button3DProps extends PressableProps {
  text: string;
  animationDuration?: number;
  backdropHeight?: number;
  backgroundColor?: string;
  color?: string;
  backdropColor?: string;
  fontSize?: number;
  loading?: boolean;
  success?: boolean;
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
  success,
  ...props
}: Button3DProps) => {
  const translateY = useSharedValue(0);

  const [bgColor, setbgColor] = useState({ backgroundColor, backdropColor });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value
        }
      ]
    };
  });

  // const animatedColor = useAnimatedStyle(() => {
  //  const color = interpolateColor(
  //  value.value, [0, 1], ['#fbc02e', 'green']);

  //   return {
  //     backgroundColor: color
  //   };
  // });

  const loadingAnim = () => {
    if (loading) {
      return <ActivityIndicator color="#FFFFFF" size="small" />;
    } else if (success) {
      return <FontAwesome color="white" name="check" size={24} />;
    } else {
      return <Text style={[{ color, fontSize }, styles.text]}>{text}</Text>;
    }
  };

  useEffect(() => {
    if (success) {
      setbgColor({ backgroundColor: '#52B542', backdropColor: '#539B47' });
    }
  }, [success]);

  return (
    <Pressable
      disabled={loading}
      //TODO: style={[style, { paddingBottom: backdropHeight }]}
      //Da error en style
      style={[{}, { paddingBottom: backdropHeight }]}
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
          { backgroundColor: bgColor.backgroundColor },
          styles.button,
          animatedStyle
        ]}
      >
        <View style={styles.textContainer}>{loadingAnim()}</View>
      </Animated.View>
      <View
        style={[
          {
            top: backdropHeight,
            backgroundColor: bgColor.backdropColor
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
  },
  textContainer: {
    height: '17@ms'
  }
});

export default Button3D;
