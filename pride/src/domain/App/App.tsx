import React from 'react';

import Navigation from '@domain/Navigation';
import { AuthProvider } from '@context/Auth';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build();

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
