import { useEffect, useReducer } from 'react';
import SettingsReducer from './SettingsReducer';
import { SettingsContextType } from './SettingsContext';
import { DefaultSettings } from '@shared/Settings';

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
