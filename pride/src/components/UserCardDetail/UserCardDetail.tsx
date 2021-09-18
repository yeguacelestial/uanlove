// @refresh reset
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

export interface UserCardDetailProps {
  name: string;
  age: number | string;
  pictures?: string[];
  initialPicture?: number;
  description?: string;
  onPressExit?: (e: GestureResponderEvent) => void;
  children?: React.ReactNode;
  childrenHeight?: number;
}

const UserCardDetail: React.FC<UserCardDetailProps> = ({
  name,
  age,
  pictures = [],
  initialPicture,
  description,
  onPressExit,
  children,
  childrenHeight
}: UserCardDetailProps) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const window = Dimensions.get('window');
    setHeight(window.height);
  }, []);

  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: childrenHeight ? childrenHeight + ms(32) : 0
        }}
        overScrollMode="never"
        scrollEventThrottle={16}
        style={styles.container}
      >
        <Pictures
          initialPicture={initialPicture}
          pictures={pictures}
          style={{
            height: height * 0.7
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
              style={styles.back}
              onPress={onPressExit}
            />
          </View>
          {description ? (
            <Text style={styles.description}>{description}</Text>
          ) : null}
        </View>
      </ScrollView>
      {children ? <View style={styles.children}>{children}</View> : null}
    </View>
  );
};

const styles = ScaledSheet.create({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    backgroundColor: 'white'
  },
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  information: {
    padding: '16@ms'
  },
  name: {
    fontSize: '20@ms',
    fontWeight: 'bold',
    color: 'black'
  },
  description: {
    marginTop: '13@ms',
    fontSize: '13@ms',
    color: 'black'
  },
  back: {
    position: 'absolute',
    right: 0,
    top: 0
  },
  children: {
    position: 'absolute',
    bottom: '16@ms',
    left: '16@ms',
    right: '16@ms'
  }
});

export default UserCardDetail;
