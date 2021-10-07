import { useContext } from 'react';

import {
  SettingsContext,
  SettingsActionKind,
  SettingsActions
} from '@context/settings';

export { SettingsActionKind, SettingsActions };

const useSettings = () => {
  const [settings, dispatch] = useContext(SettingsContext);

  return {
    ...settings,
    dispatch
  };
};

export default useSettings;
