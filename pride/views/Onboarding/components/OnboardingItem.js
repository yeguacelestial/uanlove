import { Text, View, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import { MainStyles } from '../../../styles/core';


const OnboardingItem = ({ item }) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[MainStyles.container, { width }]}>
      <Image source={item.image} style={[
        MainStyles.contain,
        MainStyles.justifyCenter,
        { width },
        {
          flex: 0.7,
        },
      ]}/>
  
      <View style={{ flex: 0.3 }}>
        <Text style={MainStyles.title}>{item.title}</Text>
        <Text style={MainStyles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

export default OnboardingItem;