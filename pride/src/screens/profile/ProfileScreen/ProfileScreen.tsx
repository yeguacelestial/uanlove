import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuth } from '@context/Auth/hooks';
import { Button, Text, View, StyleSheet } from 'react-native';
import ScreenView from '@components/ScreenView';

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
    <ScreenView style={styles.root}>
      <View style={styles.card}>
        <Text>Card</Text>
      </View>
      <View style={styles.actions}>
        <Button
          title="Detail"
          onPress={() => navigation.push('profile-detail')}
        />
        <Button title="Edit" onPress={() => navigation.push('profile-edit')} />
        <Button title="Settings" onPress={() => navigation.push('settings')} />
        <Button title="Sign Out" onPress={() => auth.setAuthenticated(false)} />
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  root: {},
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1
  },
  actions: {
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

export default ProfileScreen;
