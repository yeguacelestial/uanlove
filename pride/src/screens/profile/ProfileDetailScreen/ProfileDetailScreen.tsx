import React from 'react';
import UserCardDetail from '@domain/UserCardDetail';
import useAuth from '@hooks/useAuth';
import { Text, View } from 'react-native';
import { ProfileDetailScreenProps } from '../props';
import { StatusBar } from 'expo-status-bar';

const ProfileDetailScreen: React.FC<ProfileDetailScreenProps> = ({
  route: { params },
  navigation
}) => {
  const { user } = useAuth();
  const { initialPicture } = params;

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
        description={user.description}
        initialPicture={initialPicture}
        name={user.name}
        pictures={[
          'https://image.shutterstock.com/image-photo/head-shot-portrait-smiling-middle-600w-1339318991.jpg',
          'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-600w-1640944705.jpg'
        ]}
        onPressExit={() => navigation.goBack()}
      ></UserCardDetail>
    </View>
  );
};

export default ProfileDetailScreen;
