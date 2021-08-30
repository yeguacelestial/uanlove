import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  GestureResponderEvent
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import ScrollView from '@components/ScrollView';

export interface UserProfileDetailProps {
  name: string;
  age: number;
  pictures?: string[];
  description: string;
  facultad: string;
  nivel: string;
  onPressInfo?: (e: GestureResponderEvent) => void;
  children?: React.ReactNode;
}

const UserProfileDetail: React.FC<UserProfileDetailProps> = ({
  name,
  age,
  pictures,
  description,
  facultad,
  nivel,
  onPressInfo,
  children
}: UserProfileDetailProps) => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.pictures}>
        <ImageBackground
          style={styles.picture}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1098998443492737024/j1In1zCr.jpg'
          }}
        />
      </View>
      <View style={styles.information}>
        <Text style={styles.name}>
          {name}, {age}
        </Text>
        <Text>{facultad}</Text>
        <Text>{nivel}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
  );
};

const backgroundColor = 'white';
const color = 'black';
const styles = ScaledSheet.create({
  root: {
    backgroundColor,
    flexGrow: 1,
    overflow: 'hidden',
    height: '100%'
  },
  pictures: {
    height: '50%',
    backgroundColor: 'black'
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
    marginTop: '13@ms',
    fontSize: '13@ms',
    color
  },
  picture: {
    flexGrow: 1
  }
});

export default UserProfileDetail;
