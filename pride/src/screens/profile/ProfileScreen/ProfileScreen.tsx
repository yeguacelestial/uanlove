import React from 'react';
import { View, Text } from 'react-native';
import { ProfileScreenProps } from '../props';
import ScreenView from '@components/ScreenView';
import { ScaledSheet } from 'react-native-size-matters';
import ProfileCard from './ProfileCard';
import useProfileScreen from './useProfileScreen';

const ProfileScreen: React.FC<ProfileScreenProps> = ({
  navigation
}: ProfileScreenProps) => {
  const { signOut, user, picture, onChangePicture } = useProfileScreen();

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
        description={user.description}
        name={user.name}
        pictures={[
          'https://image.shutterstock.com/image-photo/head-shot-portrait-smiling-middle-600w-1339318991.jpg',
          'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-600w-1640944705.jpg'
        ]}
        onChangePicture={onChangePicture}
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
