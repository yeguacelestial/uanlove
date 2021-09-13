import useAuth from '@hooks/useAuth';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useProfileScreen = () => {
  const { signOut, user } = useAuth();

  const [picture, setPicture] = useState(0);

  return {
    signOut,
    user,
    picture,
    onChangePicture: setPicture
  };
};

export default useProfileScreen;
