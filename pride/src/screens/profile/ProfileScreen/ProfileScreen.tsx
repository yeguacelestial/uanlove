import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import useAuth from '@hooks/useAuth';
import { View, Text } from 'react-native';
import ScreenView from '@components/ScreenView';
import { MaterialIcons } from '@expo/vector-icons';
import FloatingActionButton, {
  IconProps
} from '@components/FloatingActionButton';
import UserCard from '@components/UserCard';
import { ms, ScaledSheet } from 'react-native-size-matters';

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

// TODO: Move logic to custom hook.
const ProfileScreen: React.FC<ProfileScreenProps> = ({
  navigation
}: ProfileScreenProps) => {
  const { signOut, user } = useAuth();

  const getEditIcon = ({ color, size }: IconProps) => (
    <MaterialIcons color={color} name="edit" size={size} />
  );

  const getSignOutIcon = ({ color, size }: IconProps) => (
    <MaterialIcons color={color} name="logout" size={size} />
  );

  const getSettingsIcon = ({ color, size }: IconProps) => (
    <MaterialIcons color={color} name="settings" size={size} />
  );

  // TODO: Handle without user.
  if (!user)
    return (
      <View>
        <Text>Without User</Text>
      </View>
    );

  return (
    <ScreenView style={styles.root}>
      <UserCard
        age={user.age}
        description={user.description}
        name={user.name}
        pictures={[
          'https://image.shutterstock.com/image-photo/head-shot-portrait-smiling-middle-600w-1339318991.jpg',
          'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-600w-1640944705.jpg'
        ]}
        onPressInfo={() => navigation.push('profile-detail')}
      >
        <View style={styles.actions}>
          <FloatingActionButton
            getIcon={getSettingsIcon}
            style={styles.action}
            onPress={() => navigation.push('settings')}
          />
          <FloatingActionButton
            color="#de4b4b"
            getIcon={getSignOutIcon}
            size={ms(50)}
            style={styles.action}
            onPress={() => signOut()}
          />
          <FloatingActionButton
            getIcon={getEditIcon}
            style={styles.action}
            onPress={() => navigation.push('profile-edit')}
          />
        </View>
      </UserCard>
    </ScreenView>
  );
};

const styles = ScaledSheet.create({
  root: {
    padding: '16@ms'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  action: {
    marginStart: '10@ms',
    marginEnd: '10@ms'
  }
});

export default ProfileScreen;
