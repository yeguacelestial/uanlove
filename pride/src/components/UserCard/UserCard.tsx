import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  GestureResponderEvent
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { ScaledSheet, ms } from 'react-native-size-matters';

export interface UserCardProps {
  name: string;
  age: number;
  pictures: string[];
  description: string;
  onPressInfo?: (e: GestureResponderEvent) => void;
  children?: React.ReactNode;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  age,
  pictures,
  description,
  onPressInfo,
  children
}: UserCardProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.pictures}>
        <ImageBackground
          resizeMode="contain"
          source={require('./emilio.jpg')}
          style={styles.picture}
        />
      </View>
      <LinearGradient
        colors={['#00000000', '#000000']}
        locations={[0, 0.6]}
        style={styles.bottom}
      >
        <View style={styles.information}>
          <Text style={styles.name}>
            {name}, {age}
          </Text>
          <Text style={styles.description}>{description}</Text>
          <MaterialIcons
            color="white"
            name="info"
            size={ms(24)}
            style={styles.detail}
            onPress={onPressInfo}
          />
        </View>
        {children && <View style={styles.actions}>{children}</View>}
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
  pictures: {
    flexGrow: 1
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
  picture: {
    flexGrow: 1
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
