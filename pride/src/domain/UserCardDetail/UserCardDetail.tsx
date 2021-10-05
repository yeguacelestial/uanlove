// @refresh reset
import React, { useEffect, useState } from 'react';
import {
  View,
  GestureResponderEvent,
  Dimensions,
  ScrollView
} from 'react-native';
import { ms, ScaledSheet } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import Pictures from '@components/Pictures';
import useTheme from '@hooks/useTheme';
import Text from '@components/Text';

export interface UserCardDetailProps {
  name: string;
  age: number | string;
  pictures?: string[];
  picture?: number;
  setPicture?: (picture: number) => void;
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
  picture,
  setPicture,
  description,
  onPressExit,
  children,
  childrenHeight
}: UserCardDetailProps) => {
  const { userCard, navigation } = useTheme();

  const [height, setHeight] = useState(0);

  useEffect(() => {
    const window = Dimensions.get('window');
    setHeight(window.height);
  }, []);

  return (
    <View
      style={{
        flexGrow: 1,
        overflow: 'hidden',
        backgroundColor: userCard.backgroundColor
      }}
    >
      <ScrollView
        contentContainerStyle={{
          paddingBottom: childrenHeight ? childrenHeight + ms(32) : 0
        }}
        overScrollMode="never"
        scrollEventThrottle={16}
        style={styles.container}
      >
        <Pictures
          backgroundColor={navigation.colors.background}
          indicatorColor={userCard.indicatorColor}
          picture={picture}
          pictures={pictures}
          setPicture={setPicture}
          style={{
            height: height * 0.7
          }}
        />
        <View
          style={{
            padding: ms(16)
          }}
        >
          <View>
            <Text color={navigation.colors.text} size={ms(20)} weight="bold">
              {name}, {age}
            </Text>
            <Ionicons
              color={navigation.colors.text}
              name="arrow-back-circle"
              size={ms(26)}
              style={styles.back}
              onPress={onPressExit}
            />
          </View>
          {description ? (
            <Text
              color={navigation.colors.text}
              size={ms(13)}
              style={{
                marginTop: ms(13)
              }}
            >
              {description}
            </Text>
          ) : null}
        </View>
      </ScrollView>
      {children ? <View style={styles.children}>{children}</View> : null}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
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
