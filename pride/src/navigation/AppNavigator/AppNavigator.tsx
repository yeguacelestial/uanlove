import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from '@navigation/TabNavigator';
import { ProfileDetailScreen, ProfileEditScreen } from '@screens/profile';
import { SettingsScreen, ShowMeScreen } from '@screens/settings';

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
          headerShown: false,
          title: 'Detail'
        }}
      />

      {/* Settings Screens */}
      <Screen
        component={SettingsScreen}
        name="settings"
        options={{
          title: 'Settings'
        }}
      />
      <Screen
        component={ShowMeScreen}
        name="settings-show-me"
        options={{
          title: 'Show me'
        }}
      />
    </Navigator>
  );
};

export default AppNavigator;
