export type AgeSettings = {
  range: [number, number];
  active: boolean;
};

export type DiscoverySettings = {
  schools: string[];
  showMe: 'Everyone' | 'Men' | 'Women';
  age: AgeSettings;
};

type Settings = {
  notifications: boolean;
  discovery: DiscoverySettings;
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
  }
};

export default Settings;
