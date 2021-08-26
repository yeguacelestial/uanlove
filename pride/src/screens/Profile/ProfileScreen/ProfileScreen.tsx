import React from 'react';
import { Text, View, Button } from 'react-native';
import { useAuth } from '@context/Auth/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// TODO: Move this to navigator file.
type ProfileNavigatorParamList = {
  profile: undefined;
  'profile-edit': undefined;
  'profile-detail': undefined;
  settings: undefined;
};

type ProfileScreenProps = NativeStackScreenProps<
  ProfileNavigatorParamList,
  'profile'
>;

/*
FIXME
Fix warning when navigating to settings/edit/detail
going back, and then signing out.
*/
const ProfileScreen: React.FC<ProfileScreenProps> = ({
  navigation
}: ProfileScreenProps) => {
  const auth = useAuth();

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        title="Detail"
        onPress={() => navigation.push('profile-detail')}
      />
      <Button title="Edit" onPress={() => navigation.push('profile-edit')} />
      <Button title="Settings" onPress={() => navigation.push('settings')} />
      <Button title="Sign Out" onPress={() => auth.setAuthenticated(false)} />
    </View>
  );
};

export default ProfileScreen;
