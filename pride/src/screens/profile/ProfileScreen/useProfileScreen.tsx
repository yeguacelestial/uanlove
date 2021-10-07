import { useState } from 'react';

import useAuth from '@hooks/useAuth';

const useProfileScreen = () => {
  const { signOut, user } = useAuth();

  const [picture, setPicture] = useState(0);

  return {
    signOut,
    user,
    picture,
    setPicture
  };
};

export default useProfileScreen;
