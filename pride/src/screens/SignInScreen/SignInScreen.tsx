import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import useAuth from '@hooks/useAuth';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScaledSheet } from 'react-native-size-matters';
import { BackgroundSignIn } from './BackgroundSignIn';

const DATA = [
  {
    id: '0',
    bottomColor: 'yellow',
    topColor: 'blue'
  },
  {
    id: '1',
    bottomColor: 'yellow',
    topColor: 'blue'
  },
  {
    id: '2',
    bottomColor: 'red',
    topColor: 'yellow'
  }
];

const SignInScreen: React.FC = () => {
  const { signIn } = useAuth();

  const { top } = useSafeAreaInsets();

  //TODO: properties
  const renderItem = ({ item }: any) => {
    console.log(item);
    return (
      <BackgroundSignIn
        bottomColor={item.bottomColor}
        topColor={item.topColor}
      />
    );
  };

  // TODO: Handle sign in error.
  return (
    <View style={{ flex: 1, top }}>
      <StatusBar />
      {/* <BackgroundSignIn bottomColor="orange" topColor="green" /> */}
      <FlatList
        horizontal
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  buttonContainer: {
    flex: 1,
    marginHorizontal: 30,
    position: 'absolute'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    position: 'absolute'
  }
});

export default SignInScreen;
