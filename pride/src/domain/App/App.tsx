import React from 'react';

import Navigation from '@domain/Navigation';
import { AuthProvider } from '@context/auth';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
