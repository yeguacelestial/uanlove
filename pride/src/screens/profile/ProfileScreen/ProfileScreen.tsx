import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';

import SignOutAlert from '@components/SignOutAlert';
import ScreenView from '@domain/ScreenView';
import { ProfileScreenProps } from '@navigation/AppNavigator';

import ProfileCard from './ProfileCard';
import useProfileScreen from './useProfileScreen';

const ProfileScreen: React.FC<ProfileScreenProps> = ({
  navigation
}: ProfileScreenProps) => {
  const {
    signOut,
    user,
    picture,
    setPicture,
    dismiss,
    isVisible,
    setIsVisible
  } = useProfileScreen();

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
        onPressSignOut={() => setIsVisible(true)}
      />
      <SignOutAlert
        visible={isVisible}
        onAccept={signOut}
        onDismiss={dismiss}
      ></SignOutAlert>
    </ScreenView>
  );
};

const styles = ScaledSheet.create({
  root: {
    padding: '16@ms'
  }
});

export default ProfileScreen;
