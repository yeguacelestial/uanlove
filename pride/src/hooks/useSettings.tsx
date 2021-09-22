import {
  SettingsContext,
  SettingsContextState,
  SettingsActionName
} from '@context/settings';
import { useContext } from 'react';

export { SettingsActionName as SettingName };

const useSettings = (): SettingsContextState => useContext(SettingsContext);

export default useSettings;
