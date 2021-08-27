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
import EStyleSheet from 'react-native-extended-stylesheet';

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
  const auth = useAuth();

  const getEditIcon = ({ color, size }: IconProps) => (
    <MaterialIcons color={color} name="edit" size={size} />
  );

  const getSettingsIcon = ({ color, size }: IconProps) => (
    <MaterialIcons color={color} name="settings" size={size} />
  );

  return (
    <ScreenView style={styles.root}>
      <View style={styles.card}>
        <UserCard
          age={34}
          description="Soy un goleador nato"
          name="Lionel"
          pictures={[]}
        />
      </View>
      <View style={styles.actions}>
        <FloatingActionButton
          getIcon={getSettingsIcon}
          style={styles.action}
          onPress={() => navigation.push('settings')}
        />
        <FloatingActionButton
          getIcon={getEditIcon}
          style={styles.action}
          onPress={() => navigation.push('profile-edit')}
        />
      </View>
    </ScreenView>
  );
};

const styles = EStyleSheet.create({
  root: {},
  card: {
    flexGrow: 1,
    padding: '2rem'
  },
  actions: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  action: {
    marginStart: 20,
    marginEnd: 20
  }
});

export default ProfileScreen;
