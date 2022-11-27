import { combineReducers } from 'redux';

import capital from './capital';
import meteo from './home';
import prevision from './prevision';

export default combineReducers({
  meteo,
  prevision,
  capital,
});
