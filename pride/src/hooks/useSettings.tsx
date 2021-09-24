import { SettingsContext } from '@context/settings';
import { SettingsActionKind, SettingsActions } from '@context/settings';
import { useContext } from 'react';

export { SettingsActionKind, SettingsActions };

const useSettings = () => useContext(SettingsContext);

export default useSettings;
