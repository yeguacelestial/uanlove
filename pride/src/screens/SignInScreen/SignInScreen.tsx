import React from 'react';
import { Text, ScrollView, Button } from 'react-native';
import { useAuth } from '@context/Auth/hooks';

const SignInScreen: React.FC = () => {
  const auth = useAuth();

  return (
    <ScrollView>
      <Text>SignIn Screen</Text>
      <Button title="Sign In" onPress={() => auth.setAuthenticated(true)} />
    </ScrollView>
  );
};

export default SignInScreen;
