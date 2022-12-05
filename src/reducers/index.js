import { combineReducers } from 'redux';

import meteo from './home';
import prevision from './prevision';
import location from './location';

export default combineReducers({
  meteo,
  prevision,
  location,
});
