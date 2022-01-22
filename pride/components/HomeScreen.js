import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = () => {
  const clearOnBoarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding')
    } catch(err) {
      console.log("@clearOnBoarding error: ", err)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={clearOnBoarding}>
        <Text>Clear Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default HomeScreen;