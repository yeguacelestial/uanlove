import { KeyboardAvoidingView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import Onboarding from './screens/Onboarding';
import CustomBottomTabBar from './navigation/CustomBottomTabBar';
import EditProfileScreen from './screens/EditProfileScreen';
import EditProfilePhotosScreen from './screens/EditProfilePhotosScreen';


const Stack = createStackNavigator();

export default function App() {
  return (

    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen name="Onboarding" component={Onboarding} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="CustomBottomTabBar" component={CustomBottomTabBar} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen name="EditProfilePhotos" component={EditProfilePhotosScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}