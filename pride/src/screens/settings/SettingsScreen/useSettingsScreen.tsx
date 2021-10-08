import { useState } from 'react';

export const useSettingsScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  const dismiss = () => {
    setIsVisible(false);
  };
  return {
    isVisible,
    setIsVisible,
    dismiss
  };
};
