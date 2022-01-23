import { View, Text, Image } from 'react-native';
import AwesomeButtonC137 from 'react-native-really-awesome-button/src/themes/c137';
import { MainStyles } from '../../../styles/core';

const SignInButton = () => {
  return (
    <View style={MainStyles.container}>
      <AwesomeButtonC137
        type="secondary"
        backgroundColor="#f7f700"
        width={355}
        height={50}
        borderRadius={5}
        onPress={(next) => {
          // handlePressAsync();
          next();
        }}
      >
        <Image
          source={require('../../../assets/uni-logo.jpg')}
          style={{
            height: 35,
            width: 35,
          }}
        />
        <Text style={{
          fontWeight: 'bold',
          fontSize: 15,
          marginLeft: 8,
        }}>
          Iniciar sesión con tu correo universitario
        </Text>
      </AwesomeButtonC137>
    </View>
  );
};

export default SignInButton;
