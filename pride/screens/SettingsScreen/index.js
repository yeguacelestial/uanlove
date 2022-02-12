import { Button, Text, View } from 'react-native';
import useUserToken from '../../hooks/affair/useUserToken';

const SettingsScreen = ({ navigation }) => {
  const { destroyUserToken } = useUserToken();

  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button
        title='Sign out'
        onPress={() => {
          destroyUserToken();
          navigation.navigate("Onboarding");
        }}
      />
    </View>
  );
};

export default SettingsScreen;
