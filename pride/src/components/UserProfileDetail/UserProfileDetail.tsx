import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  GestureResponderEvent,
  Dimensions,
  ScrollView
} from 'react-native';
import { ms, ScaledSheet } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import Pictures from '@components/Pictures';

export interface UserProfileDetailProps {
  name: string;
  age: number;
  pictures?: string[];
  initialPicture?: number;
  description: string;
  onPressExit?: (e: GestureResponderEvent) => void;
  children?: React.ReactNode;
}

const UserProfileDetail: React.FC<UserProfileDetailProps> = ({
  name,
  age,
  pictures = [],
  initialPicture,
  description,
  onPressExit,
  children
}: UserProfileDetailProps) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const window = Dimensions.get('window');
    setHeight(window.height * 0.7);
  }, []);

  return (
    <ScrollView style={styles.root}>
      <Pictures
        initialPicture={initialPicture}
        pictures={pictures}
        style={{
          height
        }}
      />
      <View style={styles.information}>
        <View>
          <Text style={styles.name}>
            {name}, {age}
          </Text>
          <Ionicons
            color="black"
            name="arrow-back-circle"
            size={ms(26)}
            style={styles.exit}
            onPress={onPressExit}
          />
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
      {children && <View style={styles.children}>{children}</View>}
    </ScrollView>
  );
};

const backgroundColor = 'white';
const color = 'black';
const styles = ScaledSheet.create({
  root: {
    backgroundColor,
    flexGrow: 1,
    overflow: 'hidden'
  },
  pictures: {
    backgroundColor: 'black'
  },
  information: {
    padding: '16@ms'
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
  exit: {
    position: 'absolute',
    right: 0,
    top: 0
  },
  children: {}
});

export default UserProfileDetail;
