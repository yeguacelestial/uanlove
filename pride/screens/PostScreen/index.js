import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, StyleSheet, Text, View } from 'react-native';

const PostScreen = () => {
  return (
    <View>
      <Text>PostScreen</Text>
      <Button
        onPress={async () => {
          await AsyncStorage.removeItem('@userToken');
        }}
        title='Remove token'
      ></Button>
    </View>
  );
};

export default PostScreen;
