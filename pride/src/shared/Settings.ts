export type AgeSettings = {
  range: [number, number];
  active: boolean;
};

export type DiscoverySettings = {
  schools: string[];
  showMe: 'Everyone' | 'Men' | 'Women';
  age: AgeSettings;
};

export type GeneralSettings = {
  darkTheme: boolean;
};

type Settings = {
  notifications: boolean;
  discovery: DiscoverySettings;
  general: GeneralSettings;
};

export const DefaultSettings: Settings = {
  notifications: true,
  discovery: {
    schools: [],
    showMe: 'Everyone',
    age: {
      range: [18, 100],
      active: false
    }
  },
  general: {
    darkTheme: false
  }
};

export default Settings;
