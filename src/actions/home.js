import axios from 'axios';
import {showMessage} from 'react-native-flash-message';

export const STORE_METEO = 'STORE_METEO';
export const getMeteo = () => dispatch => {
  axios({
    method: 'GET',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&timezone=GMT&daily=temperature_2m_max,temperature_2m_min',
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
