import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import UserCardDetail from '@domain/UserCardDetail';
import useAuth from '@hooks/useAuth';
import { ProfileDetailScreenProps } from '@navigation/AppNavigator';

const ProfileDetailScreen: React.FC<ProfileDetailScreenProps> = ({
  route: { params },
  navigation
}) => {
  const { user } = useAuth();
  const { initialPicture } = params;

  // TODO: Pass this to useEffect.
  const length = user ? user.pictures.length : 0;
  const [picture, setPicture] = useState(
    length === 0 ? 0 : Math.min(initialPicture, length - 1)
  );

  // TODO: Handle without user.
  if (!user)
    return (
      <View>
        <Text>Without user</Text>
      </View>
    );

  return (
    <View
      style={{
        flex: 1
      }}
    >
      <StatusBar hidden />
      <UserCardDetail
        age={user.age}
        description={user.bio}
        name={user.name}
        picture={picture}
        pictures={user.pictures}
        setPicture={setPicture}
        onPressExit={() => navigation.goBack()}
      ></UserCardDetail>
    </View>
  );
};

export default ProfileDetailScreen;
