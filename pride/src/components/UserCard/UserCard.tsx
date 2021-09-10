import React from 'react';
import { View, Text, GestureResponderEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { ScaledSheet, ms } from 'react-native-size-matters';
import Pictures from '@components/Pictures';

// TODO: Fix style when there is not a description.
// TODO: Fix style when description is too long.

export interface UserCardProps {
  name: string;
  age: number | string;
  pictures?: string[];
  initialPicture?: number;
  description?: string;
  onPressInfo?: (e: GestureResponderEvent) => void;
  onChangePicture?: (index: number) => void;
  children?: React.ReactNode;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  age,
  pictures = [],
  initialPicture,
  description,
  onPressInfo,
  onChangePicture,
  children
}: UserCardProps) => {
  return (
    <View style={styles.root}>
      <Pictures
        initialPicture={initialPicture}
        pictures={pictures}
        onPictureChange={onChangePicture}
      />
      <LinearGradient
        colors={['#00000000', '#000000']}
        locations={[0, 0.6]}
        style={styles.bottom}
      >
        <View style={styles.information}>
          <Text style={styles.name}>
            {name}, {age}
          </Text>
          {description ? (
            <Text style={styles.description}>{description}</Text>
          ) : null}
          <MaterialIcons
            color="white"
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

const backgroundColor = 'black';
const color = 'white';

const styles = ScaledSheet.create({
  root: {
    backgroundColor,
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
    paddingBottom: 0
  },
  name: {
    fontSize: '20@ms',
    fontWeight: 'bold',
    color
  },
  description: {
    fontSize: '13@ms',
    color
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
