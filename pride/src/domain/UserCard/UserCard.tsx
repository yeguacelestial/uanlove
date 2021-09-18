import React from 'react';
import { View, GestureResponderEvent, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { ScaledSheet, ms } from 'react-native-size-matters';
import Pictures from '@components/Pictures';
import Text from '@components/Text';
import useTheme from '@hooks/useTheme';

export interface UserCardProps {
  name: string;
  age: number | string;
  pictures?: string[];
  initialPicture?: number;
  description?: string;
  onPressInfo?: (e: GestureResponderEvent) => void;
  onChangePicture?: (index: number) => void;
  children?: React.ReactNode;
  style?: ViewStyle;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  age,
  pictures = [],
  initialPicture,
  description,
  onPressInfo,
  onChangePicture,
  style,
  children
}: UserCardProps) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: theme.userCard.backgroundColor
        },
        styles.root,
        style
      ]}
    >
      <Pictures
        backgroundColor={theme.userCard.backgroundColor}
        indicatorColor={theme.userCard.indicatorColor}
        indicatorsHorizontalPadding={ms(16)}
        initialPicture={initialPicture}
        pictures={pictures}
        onPictureChange={onChangePicture}
      />
      <LinearGradient
        colors={theme.userCard.gradientColors}
        locations={theme.userCard.gradientLocations}
        style={styles.bottom}
      >
        <View style={styles.information}>
          <Text color={theme.userCard.color} size={ms(20)} weight="bold">
            {name}, {age}
          </Text>
          {description ? (
            <Text color={theme.userCard.color} numberOfLines={3} size={ms(13)}>
              {description}
            </Text>
          ) : null}
          <MaterialIcons
            color={theme.userCard.detailIconColor}
            name="info"
            size={ms(24)}
            style={styles.detail}
            onPress={onPressInfo}
          />
        </View>
        {children ? <View style={styles.actions}>{children}</View> : null}
      </LinearGradient>
    </View>
  );
};

const styles = ScaledSheet.create({
  root: {
    flexGrow: 1,
    borderRadius: '15@ms',
    overflow: 'hidden'
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  information: {
    padding: '16@ms',
    paddingBottom: 0,
    paddingEnd: '48@ms'
  },
  name: {
    fontSize: '20@ms',
    fontWeight: 'bold'
  },
  description: {
    fontSize: '13@ms'
  },
  actions: {
    padding: '8@ms'
  },
  detail: {
    position: 'absolute',
    right: '16@ms',
    bottom: 0
  }
});

export default UserCard;
