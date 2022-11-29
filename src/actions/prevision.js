import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import Getlocation from '../components/GetLocation';

export const STORE_PREVISION = 'STORE_PREVISION';

export const getPrevision = () => dispatch => {
  axios({
    method: 'GET',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&timezone=GMT&daily=temperature_2m_max,temperature_2m_min,weathercode',
  })
    .then(res => {
      dispatch(storePrevision(res.data));
      showMessage({
        message: 'Récupération réussie',
        type: 'info',
        color: 'white',
        backgroundColor: 'green',
        duration: 400,
      });
    })
    .catch(err => {
      showMessage({
        message: 'Récupération échoué...',
        type: 'info',
        color: 'white',
        backgroundColor: 'red',
        duration: 400,
      });
    });
};

export const storePrevision = payload => ({
  type: STORE_PREVISION,
  payload,
});
