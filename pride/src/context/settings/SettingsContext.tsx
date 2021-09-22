import { createContext } from 'react';
import SettingsContextState, {
  DefaultSettingsContextState
} from './SettingsContextState';

const SettingsContext = createContext<SettingsContextState>(
  DefaultSettingsContextState
);

export default SettingsContext;
