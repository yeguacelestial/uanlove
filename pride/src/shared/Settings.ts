import Gender from './Gender';

type Settings = {
  notifications: boolean;
  showMe: Gender | 'All';
};

export const DefaultSettings: Settings = {
  notifications: true,
  showMe: 'All'
};

export default Settings;
