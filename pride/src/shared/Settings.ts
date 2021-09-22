import Gender from './Gender';

type Settings = {
  notifications: boolean;
  showMe: Gender | 'All';
  schools: string[];
  ageRange: { low: number; high: number };
};

export const DefaultSettings: Settings = {
  notifications: true,
  showMe: 'All',
  schools: [],
  ageRange: { low: 18, high: 100 }
};

export default Settings;
