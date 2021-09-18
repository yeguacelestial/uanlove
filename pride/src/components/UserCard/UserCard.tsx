import React from 'react';
import { View, GestureResponderEvent, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { ScaledSheet, ms } from 'react-native-size-matters';
import Pictures from '@components/Pictures';
import Text from '@components/Text';

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
  gradientColors?: string[];
  gradientLocations?: number[];
  textColor?: string;
  detailIconColor?: string;
  backgroundColor?: string;
  picturesIndicatorColor?: string;
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
  children,
  gradientColors = ['#00000000', '#000000'],
  gradientLocations = [0, 0.6],
  textColor = 'white',
  detailIconColor = 'white',
  backgroundColor = 'black',
  picturesIndicatorColor
}: UserCardProps) => {
  return (
    <View
      style={[
        {
          backgroundColor
        },
        styles.root,
        style
      ]}
    >
      <Pictures
        backgroundColor={backgroundColor}
        indicatorColor={picturesIndicatorColor}
        indicatorsHorizontalPadding={ms(16)}
        initialPicture={initialPicture}
        pictures={pictures}
        onPictureChange={onChangePicture}
      />
      <LinearGradient
        colors={gradientColors}
        locations={gradientLocations}
        style={styles.bottom}
      >
        <View style={styles.information}>
          <Text color={textColor} size={ms(20)} weight="bold">
            {name}, {age}
          </Text>
          {description ? (
            <Text color={textColor} numberOfLines={3} size={ms(13)}>
              {description}
            </Text>
          ) : null}
          <MaterialIcons
            color={detailIconColor}
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
