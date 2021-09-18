import React from 'react';
import { View } from 'react-native';
import FloatingActionButton, {
  IconProps
} from '@components/FloatingActionButton';
import UserCard from '@components/UserCard';
import { MaterialIcons } from '@expo/vector-icons';
import { ms, ScaledSheet } from 'react-native-size-matters';
import useTheme from '@hooks/useTheme';

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
  const { theme } = useTheme();

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
      backgroundColor={theme.userCard.backgroundColor}
      description={description}
      detailIconColor={theme.userCard.detailIconColor}
      gradientColors={theme.userCard.gradientColors}
      gradientLocations={theme.userCard.gradientLocations}
      name={name}
      pictures={pictures}
      picturesIndicatorColor={theme.userCard.indicatorColor}
      textColor={theme.userCard.color}
      onChangePicture={onChangePicture}
      onPressInfo={onPressInfo}
    >
      <View style={styles.actions}>
        <FloatingActionButton
          color={theme.profileUserCard.settingsIconColor}
          getIcon={getSettingsIcon}
          style={styles.action}
          onPress={onPressSettings}
        />
        <FloatingActionButton
          color={theme.profileUserCard.signOutIconColor}
          getIcon={getSignOutIcon}
          size={ms(50)}
          style={styles.action}
          onPress={onPressSignOut}
        />
        <FloatingActionButton
          color={theme.profileUserCard.editIconColor}
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
