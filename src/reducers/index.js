import { combineReducers } from 'redux';

import capital from './capital';
import meteo from './home';
import prevision from './prevision';
import location from './location';

export default combineReducers({
  capital,
  meteo,
  prevision,
  location,
});
