// @refresh reset
import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageSourcePropType,
  ImageBackground
} from 'react-native';

import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent
} from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import { ms, ScaledSheet } from 'react-native-size-matters';

import Button3D from '@components/Button3D';

export interface OnboardingProps {
  messages: Array<{
    title: string;
    subtitle?: string;
  }>;
  images: ImageSourcePropType[];
  topColors: string[];
  bottomColors: string[];
  onSignInPress?: () => void;
}

const MAX_ROTATION = 4;
const VELOCITY = 100;

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
  images,
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
    onEnd: (e, context) => {
      if (Math.abs(e.velocityX) >= VELOCITY) {
        if (e.translationX < 0) {
          index.value =
            index.value === messages.length - 1 ? index.value : index.value + 1;
          //rotate.value = withSpring(MAX_ROTATION);
        } else {
          index.value = index.value === 0 ? index.value : index.value - 1;
          //rotate.value = withSpring(-MAX_ROTATION);
        }

        rotate.value = withSpring(
          -Math.sign(context.startRotate) * MAX_ROTATION,
          {
            damping: 6
          }
        );
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

  const rootStyle = useAnimatedStyle(() => {
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
      <Animated.View style={[styles.root, rootStyle]}>
        <Animated.View
          style={[StyleSheet.absoluteFill, styles.top, topStyle]}
        />
        <Animated.View
          style={[StyleSheet.absoluteFill, styles.bottom, bottomStyle]}
        />
        <Animated.View style={[styles.content, messageStyle]}>
          <View style={styles.pictures}>
            {images.map((source, index) => {
              return (
                <View
                  key={index}
                  style={{
                    padding: ms(32),
                    overflow: 'visible',
                    width
                  }}
                >
                  <ImageBackground
                    resizeMode="center"
                    source={source}
                    style={{
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </View>
              );
            })}
          </View>
          <View style={styles.messages}>
            {messages.map((message, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.message,
                    {
                      width
                    }
                  ]}
                >
                  <Text style={styles.title}>{message.title}</Text>
                  <Text style={styles.subtitle}>{message.subtitle}</Text>
                </View>
              );
            })}
          </View>
        </Animated.View>
        <View style={styles.static}>
          <Button3D text="Ingresar" onPress={onSignInPress} />
          <View style={styles.indicators}>
            {messages.map((_, i) => (
              <Indicator key={i} currentIndex={index} index={i} />
            ))}
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
  top: {
    bottom: '50%'
  },
  bottom: {
    zIndex: -1,
    top: '50%'
  },
  content: {
    flex: 1,
    justifyContent: 'space-evenly'
  },
  messages: {
    flexDirection: 'row'
  },
  message: {
    padding: '64@ms'
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
  },
  pictures: {
    flexDirection: 'row',
    flex: 1
  },
  static: {
    padding: ms(64),
    paddingTop: ms(32)
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: ms(32)
  }
});

export default Onboarding;
