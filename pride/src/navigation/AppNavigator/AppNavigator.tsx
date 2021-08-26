import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import FloatingTabBar from '@components/FloatingTabBar';

import Home from '@screens/Home';
import Messages from '@screens/Messages';
import Profile from '@screens/Profile';
import Likes from '@screens/Likes';

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
        component={Home}
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: getTabBarIcon('home')
        }}
      />
      <Screen
        component={Likes}
        name="likes"
        options={{
          title: 'Likes',
          tabBarIcon: getTabBarIcon('heart')
        }}
      />
      <Screen
        component={Messages}
        name="messages"
        options={{
          title: 'Messages',
          tabBarIcon: getTabBarIcon('chatbox')
        }}
      />
      <Screen
        component={Profile}
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: getTabBarIcon('person')
        }}
      />
    </Navigator>
  );
};

export default AppNavigator;
