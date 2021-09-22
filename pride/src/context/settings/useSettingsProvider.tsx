import { useEffect, useReducer } from 'react';
import SettingsContextState, {
  SettingsAction,
  SettingsActionName
} from './SettingsContextState';
import Settings, { DefaultSettings } from '@shared/Settings';

function reducer(state: Settings, action: SettingsAction): Settings {
  switch (action.name) {
    case SettingsActionName.Settings:
      return action.settings;

    case SettingsActionName.Notifications:
      return {
        ...state,
        notifications: action.value
      };

    case SettingsActionName.ShowMe:
      return {
        ...state,
        showMe: action.value
      };

    case SettingsActionName.Schools:
      return {
        ...state,
        schools: action.value
      };

    case SettingsActionName.AgeRange:
      return {
        ...state,
        ageRange: action.value
      };
  }
}

const useSettingsProvider = (): SettingsContextState => {
  const [state, dispatch] = useReducer(reducer, DefaultSettings);

  useEffect(() => {
    // TODO: Get settings from server.
  }, []);

  useEffect(() => {
    // TODO: Save settings to server.
  }, [state]);

  return [state, dispatch];
};

export default useSettingsProvider;
