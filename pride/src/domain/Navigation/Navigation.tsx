import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import FloatingTabBar from '@components/FloatingTabBar';

import Home from '@screens/Home';
import Messages from '@screens/Messages';
import Profile from '@screens/Profile';
import Likes from '@screens/Likes';
import SignIn from '@screens/SignIn';
import { useAuth } from '@context/Auth/hooks';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const SignedOut: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={SignIn} name="SignIn" />
    </Stack.Navigator>
  );
};

const SignedIn: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }: { color: string; size: number }) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let icon: any = 'bug';

          switch (route.name) {
            case 'Home':
              icon = 'home';
              break;
            case 'Likes':
              icon = 'heart';
              break;
            case 'Messages':
              icon = 'chatbox';
              break;
            case 'Profile':
              icon = 'person';
              break;
          }

          return <Ionicons color={color} name={icon} size={size} />;
        }
      })}
      tabBar={FloatingTabBar}
    >
      <Tab.Screen component={Home} name="Home" />
      <Tab.Screen component={Likes} name="Likes" options={{}} />
      <Tab.Screen component={Messages} name="Messages" />
      <Tab.Screen component={Profile} name="Profile" />
    </Tab.Navigator>
  );
};

const Navigation: React.FC = () => {
  const auth = useAuth();

  return (
    <NavigationContainer>
      {auth.authenticated ? <SignedIn /> : <SignedOut />}
    </NavigationContainer>
  );
};

export default Navigation;
