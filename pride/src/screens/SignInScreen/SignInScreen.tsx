// @refresh reset
import React from 'react';
import { View } from 'react-native';
import useAuth from '@hooks/useAuth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ms } from 'react-native-size-matters';
import Button3D from '@components/Button3D';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolateColor
} from 'react-native-reanimated';

const SignInScreen: React.FC = () => {
  const left = useSharedValue(false);
  const value = useSharedValue(0);

  const { top } = useSafeAreaInsets();

  const { signIn } = useAuth();

  const panGestureHandler =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onEnd: e => {
        left.value = e.translationX < 0;
        value.value = withTiming(left.value ? 1 : 0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(value.value, [0, 1], ['yellow', 'blue']);

    return {
      backgroundColor: color
    };
  });

  // TODO: Handle sign in error.
  return (
    <View style={{ flex: 1, top }}>
      <PanGestureHandler onGestureEvent={panGestureHandler}>
        <Animated.View
          style={[
            animatedStyle,
            {
              padding: ms(16),
              flex: 1
            }
          ]}
        >
          <Button3D text="Sign In" onPress={() => signIn()} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default SignInScreen;
