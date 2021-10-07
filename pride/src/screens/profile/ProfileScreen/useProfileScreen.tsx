import { useState } from 'react';

import useAuth from '@hooks/useAuth';

const useProfileScreen = () => {
  const { signOut, user } = useAuth();

  const [picture, setPicture] = useState(0);

  const [isVisible, setIsVisible] = useState(false)

  const dismiss =  () => {
    setIsVisible(false)
  }

  return {
    signOut,
    user,
    picture,
    setPicture,
    dismiss,
    isVisible,
    setIsVisible
  };
};

export default useProfileScreen;
