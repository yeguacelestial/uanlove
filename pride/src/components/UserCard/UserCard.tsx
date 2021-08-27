import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export interface UserCardProps {
  name: string;
  age: number;
  pictures: string[];
  description: string;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  age,
  pictures,
  description
}: UserCardProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.pictures}>
        <ImageBackground
          style={styles.picture}
          source={require('./emilio.jpg')}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>
          {name}, {age}
        </Text>
        <Text style={styles.infoDesc}>{description}</Text>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  root: {
    backgroundColor: 'red',
    flexGrow: 1,
    borderRadius: 30,
    overflow: 'hidden'
  },
  pictures: {
    backgroundColor: 'green',
    flexGrow: 1
  },
  info: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '2rem'
  },
  infoText: {
    fontSize: '2rem',
    color: 'white'
  },
  infoDesc: {
    fontSize: '1.1rem',
    color: 'white'
  },
  picture: {
    flexGrow: 1
  }
});

export default UserCard;
