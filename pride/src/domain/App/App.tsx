import React from 'react';

import Navigation from '@domain/Navigation';
import Providers from '@domain/Providers';

const App: React.FC = () => {
  return (
    <Providers>
      <Navigation />
    </Providers>
  );
};

export default App;
