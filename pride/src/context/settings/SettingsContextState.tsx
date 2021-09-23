import Settings, { DefaultSettings } from '@shared/Settings';

export enum SettingsActionName {
  Settings = 'SETTINGS',
  Notifications = 'NOTIFICATIONS',
  ShowMe = 'SHOW_ME',
  Schools = 'SCHOOLS',
  AgeRange = 'AGE_RANGE',
  OnlyShowAgeRange = 'ONLY_SHOW_AGE_RANGE'
}

export type SettingsAction =
  | {
      name: SettingsActionName.Settings;
      settings: Settings;
    }
  | {
      name: SettingsActionName.Notifications;
      value: Settings['notifications'];
    }
  | {
      name: SettingsActionName.ShowMe;
      value: Settings['showMe'];
    }
  | {
      name: SettingsActionName.Schools;
      value: Settings['schools'];
    }
  | {
      name: SettingsActionName.AgeRange;
      value: Settings['ageRange'];
    }
  | {
      name: SettingsActionName.OnlyShowAgeRange;
      value: Settings['onlyShowAgeRange'];
    };

type SettingsContextState = [Settings, (action: SettingsAction) => void];

export const DefaultSettingsContextState: SettingsContextState = [
  DefaultSettings,
  (): void => {
    return;
  }
];

export default SettingsContextState;
