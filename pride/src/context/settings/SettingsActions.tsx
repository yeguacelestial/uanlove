import Settings, {
  DiscoverySettings,
  AgeSettings,
  DistanceSettings
} from '@shared/Settings';

export enum SettingsActionKind {
  SET_SETTINGS = 'SET_SETTINGS',
  SET_NOTIFICATIONS = 'SET_NOTIFICATIONS',
  SET_SHOW_ME = 'SET_SHOW_ME',
  SET_SCHOOLS = 'SET_SHOOLS',
  SET_AGE_RANGE = 'SET_AGE_RANGE',
  SET_AGE_RANGE_ACTIVE = 'SET_AGE_RANGE_ACTIVE',
  SET_DISTANCE_MAX = 'SET_DISTANCE_MAX',
  SET_DISTANCE_GLOBAL = 'SET_DISTANCE_GLOBAL'
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
      value: DiscoverySettings['showMe'];
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
    }
  | {
      name: SettingsActionKind.SET_DISTANCE_MAX;
      value: DistanceSettings['max'];
    }
  | {
      name: SettingsActionKind.SET_DISTANCE_GLOBAL;
      value: DistanceSettings['global'];
    };

export default SettingsActions;
