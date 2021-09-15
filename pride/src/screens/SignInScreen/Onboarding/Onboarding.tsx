// @refresh reset
import Button3D from '@components/Button3D';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent
} from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedGestureHandler,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import { ms, ScaledSheet } from 'react-native-size-matters';

export interface OnboardingProps {
  messages: Array<{
    title: string;
    subtitle?: string;
  }>;
  topColors: string[];
  bottomColors: string[];
  onSignInPress?: () => void;
}

const MAX_ROTATION = 10;

// TODO: Fix top background rotation.
// TODO: Add page indicator.
// TODO: Refactor component.
// TODO: Add color interpolation.

interface IndicatorProps {
  currentIndex: Animated.SharedValue<number>;
  index: number;
}

const Indicator: React.FC<IndicatorProps> = ({
  currentIndex,
  index
}: IndicatorProps) => {
  const style = useAnimatedStyle(() => ({
    backgroundColor: `rgba(255, 255, 255, ${
      index === currentIndex.value ? '1' : '0.5'
    })`
  }));

  return (
    <Animated.View
      style={[
        {
          height: 12,
          width: 12,
          borderRadius: 6,
          marginEnd: ms(6),
          marginStart: ms(6)
        },
        style
      ]}
    />
  );
};

type ContextType = {
  startRotate: number;
  startX: number;
};

const Onboarding: React.FC<OnboardingProps> = ({
  messages,
  topColors,
  bottomColors,
  onSignInPress
}: OnboardingProps) => {
  const [width, setWidth] = useState(Dimensions.get('screen').width);
  useEffect(() => {
    setWidth(Dimensions.get('screen').width);
  }, []);

  const index = useSharedValue(0);
  const rotate = useSharedValue(MAX_ROTATION);
  const x = useSharedValue(0);

  const panGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, context) => {
      context.startX = x.value;
      context.startRotate = rotate.value;
    },
    onActive: (e, context) => {
      x.value = context.startX + e.translationX;

      /*
      const angle = context.startRotate + e.translationX * 0.1;
      rotate.value = Math.min(Math.max(angle, -MAX_ROTATION), MAX_ROTATION);
      */
    },
    onEnd: e => {
      if (e.translationX < 0) {
        index.value =
          index.value === messages.length - 1 ? index.value : index.value + 1;
        //rotate.value = withSpring(MAX_ROTATION);
      } else {
        index.value = index.value === 0 ? index.value : index.value - 1;
        //rotate.value = withSpring(-MAX_ROTATION);
      }

      x.value = withSpring(-width * index.value, {
        damping: 15
      });

      //rotate.value = withSpring(0);
    }
  });

  const topStyle = useAnimatedStyle(() => {
    const inputRange = messages.map((_, index) => -width * index).reverse();
    const bgColor = interpolateColor(x.value, inputRange, topColors);

    return {
      backgroundColor: bgColor,
      transform: [
        {
          rotateZ: `${rotate.value}deg`
        },
        {
          scaleX: 10
        },
        {
          scaleY: 1.5
        },
        {
          translateY: -70
        }
      ]
    };
  });

  const bottomStyle = useAnimatedStyle(() => {
    const inputRange = messages.map((_, index) => -width * index).reverse();
    const bgColor = interpolateColor(x.value, inputRange, bottomColors);

    return {
      backgroundColor: bgColor
    };
  });

  const bottomStyle2 = useAnimatedStyle(() => {
    const inputRange = messages.map((_, index) => -width * index).reverse();
    const bgColor = interpolateColor(x.value, inputRange, bottomColors);

    return {
      backgroundColor: bgColor
    };
  });

  const messageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value
        }
      ]
    };
  });

  return (
    <PanGestureHandler onGestureEvent={panGestureHandler}>
      <Animated.View style={[styles.root, bottomStyle2]}>
        <Animated.View
          style={[StyleSheet.absoluteFill, styles.top, topStyle]}
        />
        <Animated.View
          style={[StyleSheet.absoluteFill, styles.bottom, bottomStyle]}
        />
        <View style={styles.section}></View>
        <View style={styles.section}>
          <Animated.View style={[styles.message, messageStyle]}>
            <View
              style={[
                StyleSheet.absoluteFill,
                {
                  flexDirection: 'row'
                }
              ]}
            >
              {messages.map((message, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      width,
                      padding: ms(64)
                    }}
                  >
                    <Text style={styles.title}>{message.title}</Text>
                    <Text style={styles.subtitle}>{message.subtitle}</Text>
                  </View>
                );
              })}
            </View>
          </Animated.View>
          <View
            style={{
              padding: ms(64),
              paddingTop: 0
            }}
          >
            <Button3D text="Sign In" onPress={onSignInPress} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: ms(32)
              }}
            >
              {messages.map((_, i) => (
                <Indicator key={i} currentIndex={index} index={i} />
              ))}
            </View>
          </View>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = ScaledSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden'
  },
  section: {
    flex: 1,
    overflow: 'visible'
  },
  top: {
    bottom: '50%'
  },
  bottom: {
    zIndex: -1,
    top: '50%'
  },
  message: {
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: '16@ms',
    color: 'white'
  },
  subtitle: {
    fontStyle: 'italic',
    fontSize: '14@ms',
    color: 'white'
  }
});

export default Onboarding;
