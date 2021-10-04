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
  const { userCard } = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: userCard.backgroundColor
        },
        styles.root,
        style
      ]}
    >
      <Pictures
        backgroundColor={userCard.backgroundColor}
        indicatorColor={userCard.indicatorColor}
        indicatorsHorizontalPadding={ms(16)}
        initialPicture={initialPicture}
        pictures={pictures}
        onPictureChange={onChangePicture}
      />
      <LinearGradient
        colors={userCard.gradientColors}
        locations={userCard.gradientLocations}
        style={styles.bottom}
      >
        <View style={styles.information}>
          <Text color={userCard.color} size={ms(20)} weight="bold">
            {name}, {age}
          </Text>
          {description ? (
            <Text color={userCard.color} numberOfLines={3} size={ms(13)}>
              {description}
            </Text>
          ) : null}
          <MaterialIcons
            color={userCard.detailIconColor}
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
