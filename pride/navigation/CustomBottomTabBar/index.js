
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, Ionicons } from '@expo/vector-icons';

import Onboarding from '../../screens/Onboarding';
import HomeScreen from '../../screens/HomeScreen';
import FindScreen from '../../screens/FindScreen';
import ChatScreen from '../../screens/ChatScreen';
import PostScreen from '../../screens/PostScreen';
import SettingsScreen from '../../screens/SettingsScreen';

import { MainStyles } from '../../styles/core';
import CustomTabBarButton from './components/CustomTabBarButton';
import GenericTabBarButton from './components/GenericTabBarButton';


const Tab = createBottomTabNavigator();

const CustomBottomTabBar = ({ navigation }) => {
  return (
		<Tab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: [{
					position: 'absolute',
					bottom: 25,
					left: 20,
					right: 20,
					elevation: 0,
					backgroundColor: '#ffffff',
					borderRadius: 15,
					height: 90,
					...MainStyles.shadow,
				}],
			}}
			initialRouteName="Home"
		>
			<Tab.Screen name="Home" component={HomeScreen} options={{
				tabBarIcon: ({ focused }) => (
					<GenericTabBarButton
						focused={focused}
						text={'Home'}
						icon={<AntDesign name="home" size={24} color={focused ? '#e32f45' : '#748c94'} />}
					/>
				),
			}} />
			<Tab.Screen name="Find" component={FindScreen} options={{
				tabBarIcon: ({ focused }) => (
					<GenericTabBarButton
						focused={focused}
						text={'Find'}
						icon={<AntDesign name="find" size={24} color={focused ? '#e32f45' : '#748c94'} />}
					/>
				),
			}} />
			<Tab.Screen name="Post" component={PostScreen} options={{
				tabBarIcon: ({ focused }) => (
					<AntDesign name="heart" size={30} color="#fff" />
				),
				tabBarButton: (props) => (
					<CustomTabBarButton {...props} />
				)
				}}
			/>
			<Tab.Screen name="Chat" component={ChatScreen} options={{
				tabBarIcon: ({ focused }) => (
					<GenericTabBarButton
						focused={focused}
						text={'Chat'}
						icon={<Ionicons name="ios-chatbubbles-outline" size={24} color={focused ? '#e32f45' : '#748c94'} />}
					/>
				),
			}} />
			<Tab.Screen name="Settings" component={SettingsScreen} options={{
				tabBarIcon: ({ focused }) => (
					<GenericTabBarButton
						focused={focused}
						text={'Settings'}
						icon={<Ionicons name="settings-outline" size={24} color={focused ? '#e32f45' : '#748c94'} />}
					/>
				),
			}} />
		</Tab.Navigator>
	);
};

export default CustomBottomTabBar;