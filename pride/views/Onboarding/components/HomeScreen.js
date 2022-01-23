import { View, Text, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'
import { MainStyles } from '../../../styles/core';

const HomeScreen = () => {
  const clearOnBoarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding')
    } catch(err) {
      console.log("@clearOnBoarding error: ", err)
    }
  }

  return (
    <View style={MainStyles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={clearOnBoarding}>
        <Text>Clear Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;