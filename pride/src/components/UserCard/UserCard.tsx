import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  GestureResponderEvent
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import scale from '@utils/scale';
import { MaterialIcons } from '@expo/vector-icons';

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
            size={scale(24)}
            style={styles.detail}
            onPress={onPressInfo}
          />
        </View>
        {children && <View style={styles.actions}>{children}</View>}
      </LinearGradient>
    </View>
  );
};

const color = 'white';

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    borderRadius: scale(15),
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
    padding: scale(16),
    paddingBottom: 0
  },
  name: {
    fontSize: scale(20),
    fontWeight: 'bold',
    color
  },
  description: {
    fontSize: scale(13),
    color
  },
  picture: {
    flexGrow: 1
  },
  actions: {
    padding: scale(8)
  },
  detail: {
    position: 'absolute',
    right: scale(16),
    bottom: scale(10)
  }
});

export default UserCard;
