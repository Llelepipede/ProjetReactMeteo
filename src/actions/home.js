import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import Getlocation from '../components/GetLocation';

export const STORE_METEO = 'STORE_METEO';

export const getMeteo = () => dispatch => {
  axios({
    method: 'GET',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&timezone=GMT&hourly=relativehumidity_2m,precipitation,temperature_2m,weathercode&current_weather=true',
  })
    .then(res => {
      console.log('LE RESULTAT', res.data);
      dispatch(storeMeteo(res.data));
      showMessage({
        message: 'Récupération réussie',
        type: 'info',
        color: 'white',
        backgroundColor: 'green',
        duration: 400,
      });
    })
    .catch(err => {
      console.log('ERREUR', err);
      showMessage({
        message: 'Récupération échoué...',
        type: 'info',
        color: 'white',
        backgroundColor: 'red',
        duration: 400,
      });
    });
};

export const storeMeteo = payload => ({
  type: STORE_METEO,
  payload,
});
