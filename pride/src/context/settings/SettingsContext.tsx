import React, { createContext } from 'react';

import Settings, { DefaultSettings } from '@shared/Settings';

import SettingsActions from './SettingsActions';

export type SettingsContextType = [Settings, React.Dispatch<SettingsActions>];

const SettingsContext = createContext<SettingsContextType>([
  DefaultSettings,
  () => {
    return;
  }
]);

export default SettingsContext;
