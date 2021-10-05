import { SettingsContext } from '@context/settings';
import { SettingsActionKind, SettingsActions } from '@context/settings';
import { useContext } from 'react';

export { SettingsActionKind, SettingsActions };

const useSettings = () => {
  const [settings, dispatch] = useContext(SettingsContext);

  return {
    ...settings,
    dispatch
  };
};

export default useSettings;
