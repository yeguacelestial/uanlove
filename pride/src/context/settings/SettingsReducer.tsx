import SettingsActions, { SettingsActionKind } from './SettingsActions';
import Settings from '@shared/Settings';

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
    case SettingsActionKind.SET_DISTANCE_MAX:
      newState.discovery.distance.max = action.value;
      break;

    case SettingsActionKind.SET_DISTANCE_GLOBAL:
      newState.discovery.distance.global = action.value;
      break;
  }

  return newState;
}

export default SettingsReducer;
