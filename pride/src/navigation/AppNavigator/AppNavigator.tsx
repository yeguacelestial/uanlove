import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import FloatingTabBar from '@components/FloatingTabBar';

import HomeScreen from '@screens/HomeScreen';
import MessagesScreen from '@screens/MessagesScreen';
import LikesScreen from '@screens/LikesScreen';

import ProfileNavigator from '@navigation/ProfileNavigator';

const { Navigator, Screen } = createBottomTabNavigator();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getTabBarIcon = (icon: any) => {
  return ({ color, size }: { color: string; size: number }) => (
    <Ionicons color={color} name={icon} size={size} />
  );
};

const AppNavigator: React.FC = () => {
  return (
    <Navigator tabBar={FloatingTabBar}>
      <Screen
        component={HomeScreen}
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: getTabBarIcon('home')
        }}
      />
      <Screen
        component={LikesScreen}
        name="likes"
        options={{
          title: 'Likes',
          tabBarIcon: getTabBarIcon('heart')
        }}
      />
      <Screen
        component={MessagesScreen}
        name="messages"
        options={{
          title: 'Messages',
          tabBarIcon: getTabBarIcon('chatbox')
        }}
      />
      <Screen
        component={ProfileNavigator}
        name="profile-navigator"
        options={{
          tabBarIcon: getTabBarIcon('person'),
          headerShown: false
        }}
      />
    </Navigator>
  );
};

export default AppNavigator;
