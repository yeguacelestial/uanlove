import { useEffect, useReducer } from 'react';

import { DefaultSettings } from '@shared/Settings';

import { SettingsContextType } from './SettingsContext';
import SettingsReducer from './SettingsReducer';

const useSettingsProvider = (): SettingsContextType => {
  const [state, dispatch] = useReducer(SettingsReducer, DefaultSettings);

  useEffect(() => {
    // TODO: Get settings from server.
  }, []);

  useEffect(() => {
    // TODO: Save settings to server.
  }, [state]);

  return [state, dispatch];
};

export default useSettingsProvider;
