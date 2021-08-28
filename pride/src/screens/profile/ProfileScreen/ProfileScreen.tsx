import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuth } from '@context/Auth/hooks';
import { View } from 'react-native';
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

const ProfileScreen: React.FC<ProfileScreenProps> = ({
  navigation
}: ProfileScreenProps) => {
  const { setAuthenticated } = useAuth();

  const getEditIcon = ({ color, size }: IconProps) => (
    <MaterialIcons color={color} name="edit" size={size} />
  );

  const getSignOutIcon = ({ color, size }: IconProps) => (
    <MaterialIcons color={color} name="logout" size={size} />
  );

  const getSettingsIcon = ({ color, size }: IconProps) => (
    <MaterialIcons color={color} name="settings" size={size} />
  );

  return (
    <ScreenView style={styles.root}>
      <UserCard
        age={34}
        description="Soy un goleador nato"
        name="Lionel"
        pictures={[]}
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
            onPress={() => setAuthenticated(false)}
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
