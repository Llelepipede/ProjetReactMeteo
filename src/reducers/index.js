import { combineReducers } from 'redux';

import meteo from './home';
import prevision from './prevision';

export default combineReducers({
  meteo,
  prevision,
});
