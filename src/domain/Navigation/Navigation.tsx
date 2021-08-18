import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FloatingTabBar from '@components/FloatingTabBar';

import Home from '@screens/Home';
import Messages from '@screens/Messages';
import Profile from '@screens/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }: { color: string; size: number }) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let icon: any = 'bug';

            switch (route.name) {
              case 'Home':
                icon = 'home';
                break;
              case 'Profile':
                icon = 'person';
                break;
              case 'Messages':
                icon = 'chatbox';
                break;
            }

            return <Ionicons color={color} name={icon} size={size} />;
          }
        })}
        tabBar={FloatingTabBar}
      >
        <Screen component={Home} name="Home" />
        <Screen component={Messages} name="Messages" />
        <Screen component={Profile} name="Profile" />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
