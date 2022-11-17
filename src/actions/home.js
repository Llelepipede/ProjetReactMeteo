import axios from 'axios';
import { showMessage } from 'react-native-flash-message';

export const STORE_METEO = 'STORE_METEO';
export const getMeteo = () => dispatch => {
  axios({
    method: 'GET',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,windspeed_10m',
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
