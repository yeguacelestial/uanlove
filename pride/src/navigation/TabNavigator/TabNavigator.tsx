import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import FloatingTabBar from '@domain/FloatingTabBar';

import HomeScreen from '@screens/HomeScreen';
import MessagesScreen from '@screens/MessagesScreen';
import LikesScreen from '@screens/LikesScreen';
import { ProfileScreen } from '@screens/profile';

const { Navigator, Screen } = createBottomTabNavigator();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getTabBarIcon = (icon: any) => {
  return ({ color, size }: { color: string; size: number }) => (
    <Ionicons color={color} name={icon} size={size} />
  );
};

const TabNavigator: React.FC = () => {
  return (
    <Navigator tabBar={props => <FloatingTabBar {...props} />}>
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
        component={ProfileScreen}
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: getTabBarIcon('person')
        }}
      />
    </Navigator>
  );
};

export default TabNavigator;
