import axios from 'axios';
import {showMessage} from 'react-native-flash-message';

export const STORE_LOGIN = 'STORE_LOGIN';

export const getLogin = () => dispatch => {
  axios({
    method: 'GET',

    // API A CHANGER !!!!
    // !!!!!
    url: 'https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&timezone=GMT&hourly=relativehumidity_2m,precipitation,temperature_2m,weathercode&current_weather=true',
  })
    .then(res => {
      console.log('LE RESULTAT', res.data);
      dispatch(storeLogin(res.data));
      showMessage({
        message: 'Récupération de login réussie',
        type: 'info',
        color: 'white',
        backgroundColor: 'green',
        duration: 400,
      });
    })
    .catch(err => {
      console.log('ERREUR', err);
      showMessage({
        message: 'Récupération de login échoué...',
        type: 'info',
        color: 'white',
        backgroundColor: 'red',
        duration: 400,
      });
    });
};

export const storeLogin = payload => ({
  type: STORE_LOGIN,
  payload,
});
