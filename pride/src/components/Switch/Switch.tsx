import React, { useRef } from 'react';
import { Animated, Easing, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { ViewStyle } from 'react-native';

interface SwitchProps {
  onColor?: string;
  offColor?: string;
  label?: string;
  onToggle?: (value: boolean) => void;
  style?: ViewStyle;
  isOn?: boolean;
  labelStyle?: ViewStyle;
}

export const Switch: React.FC<SwitchProps> = ({
  onColor = '#4cd137',
  offColor = '#ecf0f1',
  onToggle,
  style = {},
  isOn = false
}) => {
  const animatedValue = useRef(new Animated.Value(isOn ? 1 : 0)).current;

  const moveToggle = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [3, 22]
  });

  const color = isOn ? onColor : offColor;

  Animated.timing(animatedValue, {
    toValue: isOn ? 1 : 0,
    useNativeDriver: true,
    duration: 300,
    easing: Easing.linear
  }).start();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          typeof onToggle === 'function' && onToggle(isOn);
        }}
      >
        <View
          style={[styles.toggleContainer, style, { backgroundColor: color }]}
        >
          <Animated.View
            style={[
              styles.toggleWheelStyle,
              {
                transform: [
                  {
                    translateX: moveToggle
                  }
                ]
              }
            ]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  toggleContainer: {
    width: 50,
    height: 30,
    marginLeft: 3,
    borderRadius: 15,
    justifyContent: 'center'
  },
  label: {
    marginRight: 2
  },
  toggleWheelStyle: {
    width: 25,
    height: 25,
    backgroundColor: 'white',
    borderRadius: 12.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 1.5
  }
});
