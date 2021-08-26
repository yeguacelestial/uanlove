import React from 'react';
import { Text, View, Button } from 'react-native';
import { useAuth } from '@context/Auth/hooks';

const ProfileScreen: React.FC = () => {
  const auth = useAuth();

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Sign Out" onPress={() => auth.setAuthenticated(false)} />
    </View>
  );
};

export default ProfileScreen;
