import {combineReducers} from 'redux';

import capital from './capital';
import meteo from './home';
import prevision from './prevision';
import login from './login';

export default combineReducers({
  capital,
  meteo,
  prevision,
  login,
});
