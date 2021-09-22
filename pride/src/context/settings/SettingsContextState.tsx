import Settings, { DefaultSettings } from '@shared/Settings';

export enum SettingsActionName {
  Settings = 'SETTINGS',
  Notifications = 'NOTIFICATIONS',
  ShowMe = 'SHOW_ME'
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
    };

type SettingsContextState = [Settings, (action: SettingsAction) => void];

export const DefaultSettingsContextState: SettingsContextState = [
  DefaultSettings,
  (): void => {
    return;
  }
];

export default SettingsContextState;
