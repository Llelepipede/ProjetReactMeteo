import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import Getlocation from '../components/GetLocation';
import Capital from '../assets/Capital/capital.json';

export const STORE_CAPITAL = 'STORE_CAPITAL';

export const storeCapital = (payload = 0) => ({
  type: STORE_CAPITAL,
  payload,
});
