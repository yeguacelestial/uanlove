import React from 'react';
import UserProfileDetail from '@components/UserProfileDetail';
import useAuth from '@hooks/useAuth';
import { Text, View } from 'react-native';

// TODO: Add props type like ProfileScreen.
const ProfileDetailScreen: React.FC = ({ navigation }) => {
  const { user } = useAuth();

  // TODO: Handle without user.
  if (!user)
    return (
      <View>
        <Text>Without user</Text>
      </View>
    );

  return (
    <UserProfileDetail
      age={user.age}
      description={user.description}
      name={user.name}
      pictures={[
        'https://image.shutterstock.com/image-photo/head-shot-portrait-smiling-middle-600w-1339318991.jpg',
        'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-600w-1640944705.jpg'
      ]}
      onPressExit={() => navigation.goBack()}
      // onPressInfo={() => navigation.push('profile-detail')}
    ></UserProfileDetail>
  );
};

export default ProfileDetailScreen;
