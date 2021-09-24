import Settings, { DiscoverySettings, AgeSettings } from '@shared/Settings';

export enum SettingsActionKind {
  SET_SETTINGS = 'SET_SETTINGS',
  SET_NOTIFICATIONS = 'SET_NOTIFICATIONS',
  SET_SHOW_ME = 'SET_SHOW_ME',
  SET_SCHOOLS = 'SET_SHOOLS',
  SET_AGE_RANGE = 'SET_AGE_RANGE',
  SET_AGE_RANGE_ACTIVE = 'SET_AGE_RANGE_ACTIVE'
}

type SettingsActions =
  | {
      name: SettingsActionKind.SET_SETTINGS;
      value: Settings;
    }
  | {
      name: SettingsActionKind.SET_NOTIFICATIONS;
      value: Settings['notifications'];
    }
  | {
      name: SettingsActionKind.SET_SHOW_ME;
      value: DiscoverySettings['shomMe'];
    }
  | {
      name: SettingsActionKind.SET_SCHOOLS;
      value: DiscoverySettings['schools'];
    }
  | {
      name: SettingsActionKind.SET_AGE_RANGE;
      value: AgeSettings['range'];
    }
  | {
      name: SettingsActionKind.SET_AGE_RANGE_ACTIVE;
      value: AgeSettings['active'];
    };

export default SettingsActions;
