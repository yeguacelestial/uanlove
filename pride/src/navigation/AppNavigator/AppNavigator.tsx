import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from '@navigation/TabNavigator';

import {
  ProfileDetailScreen,
  ProfileEditScreen,
  SettingsScreen
} from '@screens/profile';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Navigator>
      {/* Tab Navigator */}
      <Screen
        component={TabNavigator}
        name="tab-navigator"
        options={{ headerShown: false }}
      />
      {/* Profile Screens */}
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
          headerShown: false,
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

export default AppNavigator;
