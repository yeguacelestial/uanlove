import React from 'react';
import { View } from 'react-native';
import FloatingActionButton, {
  IconProps
} from '@components/FloatingActionButton';
import UserCard from '@components/UserCard';
import { MaterialIcons } from '@expo/vector-icons';
import { ms, ScaledSheet } from 'react-native-size-matters';

export interface ProfileCardProps {
  age: string | number;
  name: string;
  description?: string;
  pictures?: string[];
  onPressInfo?: () => void;
  onPressSettings?: () => void;
  onPressSignOut?: () => void;
  onPressEdit?: () => void;
  onChangePicture?: (index: number) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  age,
  name,
  description,
  pictures,
  onPressInfo,
  onPressSettings,
  onPressSignOut,
  onPressEdit,
  onChangePicture
}: ProfileCardProps) => {
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
    <UserCard
      age={age}
      description={description}
      name={name}
      pictures={pictures}
      onChangePicture={onChangePicture}
      onPressInfo={onPressInfo}
    >
      <View style={styles.actions}>
        <FloatingActionButton
          getIcon={getSettingsIcon}
          style={styles.action}
          onPress={onPressSettings}
        />
        {/* TODO: Get icon color from variable. */}
        <FloatingActionButton
          color="#de4b4b"
          getIcon={getSignOutIcon}
          size={ms(50)}
          style={styles.action}
          onPress={onPressSignOut}
        />
        <FloatingActionButton
          getIcon={getEditIcon}
          style={styles.action}
          onPress={onPressEdit}
        />
      </View>
    </UserCard>
  );
};

const styles = ScaledSheet.create({
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

export default ProfileCard;
