import { Text, View } from 'react-native';

const GenericTabBarButton = ({ focused, text, icon }) => {
  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      top: Platform.OS === 'ios' ? 10 : 0,
    }}>
      {icon}
      <Text
        style={{
          color: focused ? '#e32f45' : '#748c94',
          fontSize: 12,
        }}
      >
        {text.toUpperCase()}
      </Text>
    </View>
  );
};

export default GenericTabBarButton;