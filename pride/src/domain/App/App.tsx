import React from 'react';

import Navigation from '@domain/Navigation';
import Providers from '@domain/Providers';
import Theme from '@domain/Theme';

const App: React.FC = () => {
  return (
    <Providers>
      <Theme>
        <Navigation />
      </Theme>
    </Providers>
  );
};

export default App;
