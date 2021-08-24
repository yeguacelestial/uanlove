import { useAuth } from '@context/Auth/hooks';
import React from 'react';
import { Text, View, Button } from 'react-native';

const Profile: React.FC = () => {
  const auth = useAuth();

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Sign Out" onPress={() => auth.setAuthenticated(false)} />
    </View>
  );
};

export default Profile;
