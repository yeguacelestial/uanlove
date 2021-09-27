export type AgeSettings = {
  range: [number, number];
  active: boolean;
};

export type DistanceSettings = {
  max: number;
  global: boolean;
};

export type DiscoverySettings = {
  schools: string[];
  showMe: 'Everyone' | 'Men' | 'Women';
  age: AgeSettings;
  distance: DistanceSettings;
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
    },
    distance: {
      max: 150,
      global: false
    }
  }
};

export default Settings;
