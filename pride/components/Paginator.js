import { StyleSheet, View, Animated, useWindowDimensions } from 'react-native';
import { MainStyles } from '../styles/core';

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[MainStyles.row, MainStyles.h64]}>
      {data.map((_, index) => {
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        })

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        })

        return <Animated.View style={{
          height: 10,
          borderRadius: 5,
          backgroundColor: '#493d8a',
          marginHorizontal: 8,
          width: dotWidth,
          opacity
        }} key={index.toString()}/>
      })}
    </View>
  );
};

export default Paginator;
