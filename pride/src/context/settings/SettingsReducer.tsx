import Settings from '@shared/Settings';

import SettingsActions, { SettingsActionKind } from './SettingsActions';

function SettingsReducer(state: Settings, action: SettingsActions): Settings {
  if (action.name === SettingsActionKind.SET_SETTINGS) return action.value;

  const newState = { ...state };

  switch (action.name) {
    case SettingsActionKind.SET_NOTIFICATIONS:
      newState.notifications = action.value;
      break;

    case SettingsActionKind.SET_SHOW_ME:
      newState.discovery.showMe = action.value;
      break;

    case SettingsActionKind.SET_SCHOOLS:
      newState.discovery.schools = action.value;
      break;

    case SettingsActionKind.SET_AGE_RANGE:
      newState.discovery.age.range = action.value;
      break;

    case SettingsActionKind.SET_AGE_RANGE_ACTIVE:
      newState.discovery.age.active = action.value;
      break;

    case SettingsActionKind.SET_DARK_THEME:
      newState.general.darkTheme = action.value;
      break;
  }

  return newState;
}

export default SettingsReducer;
