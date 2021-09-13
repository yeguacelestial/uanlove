import React from 'react';
import { Text, ScrollView, Button } from 'react-native';
import useAuth from '@hooks/useAuth';

const SignInScreen: React.FC = () => {
  const { signIn } = useAuth();

  // TODO: Handle sign in error.
  return (
    <ScrollView>
      <Text>SignIn Screen</Text>
      <Button title="Sign In" onPress={() => signIn()} />
    </ScrollView>
  );
};

export default SignInScreen;
