import { useState } from 'react';

import useAuth from '@hooks/useAuth';

const useProfileScreen = () => {
  const { signOut, user } = useAuth();

  const [picture, setPicture] = useState(0);

  const [visible, setVisible] = useState(false);

  return {
    signOut,
    user,
    picture,
    setPicture,
    visible,
    setVisible
  };
};

export default useProfileScreen;
