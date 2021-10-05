import React from 'react';
import { View, Text } from 'react-native';
import { ProfileScreenProps } from '@navigation/AppNavigator';
import ScreenView from '@domain/ScreenView';
import { ScaledSheet } from 'react-native-size-matters';
import ProfileCard from './ProfileCard';
import useProfileScreen from './useProfileScreen';

const ProfileScreen: React.FC<ProfileScreenProps> = ({
  navigation
}: ProfileScreenProps) => {
  const { signOut, user, picture, setPicture } = useProfileScreen();

  // TODO: Handle without user.
  if (!user)
    return (
      <View>
        <Text>Without User</Text>
      </View>
    );

  return (
    <ScreenView style={styles.root}>
      <ProfileCard
        age={user.age}
        description={user.bio}
        name={user.name}
        picture={picture}
        pictures={user.pictures}
        setPicture={setPicture}
        onPressEdit={() => navigation.push('profile-edit')}
        onPressInfo={() =>
          navigation.push('profile-detail', {
            initialPicture: picture
          })
        }
        onPressSettings={() => navigation.push('settings')}
        onPressSignOut={() => signOut()}
      />
    </ScreenView>
  );
};

const styles = ScaledSheet.create({
  root: {
    padding: '16@ms'
  }
});

export default ProfileScreen;
