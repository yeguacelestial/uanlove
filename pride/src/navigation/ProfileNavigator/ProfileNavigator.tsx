import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  ProfileScreen,
  ProfileEditScreen,
  ProfileDetailScreen,
  SettingsScreen
} from '@screens/profile';

const { Navigator, Screen } = createNativeStackNavigator();

const ProfileNavigator: React.FC = () => {
  return (
    <Navigator>
      <Screen
        component={ProfileScreen}
        name="profile"
        options={{
          title: 'Profile'
        }}
      />
      <Screen
        component={ProfileEditScreen}
        name="profile-edit"
        options={{
          title: 'Edit'
        }}
      />
      <Screen
        component={ProfileDetailScreen}
        name="profile-detail"
        options={{
          // TODO: Add close button to detail screen.
          //headerShown: false
          title: 'Detail'
        }}
      />
      <Screen
        component={SettingsScreen}
        name="settings"
        options={{
          title: 'Settings'
        }}
      />
    </Navigator>
  );
};

export default ProfileNavigator;
