type Settings = {
  notifications: boolean;
  showMe: 'Everyone' | 'Men' | 'Women';
  schools: string[];
  ageRange: { low: number; high: number };
  onlyShowAgeRange: boolean;
};

export const DefaultSettings: Settings = {
  notifications: true,
  showMe: 'Everyone',
  schools: [],
  ageRange: { low: 18, high: 100 },
  onlyShowAgeRange: false
};

export default Settings;
