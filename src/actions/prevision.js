import axios from 'axios';
import { showMessage } from 'react-native-flash-message';

export const STORE_PREVISION = 'STORE_PREVISION';

import { useTranslation } from "react-i18next";



import '../configuration/translation';

export const getPrevision = (coords) => dispatch => {

  axios({
    method: 'GET',
    url: `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&timezone=GMT&daily=temperature_2m_max,temperature_2m_min,weathercode`,
  })
    .then(res => {

      dispatch(storePrevision(res.data));
      showMessage({
        message: 'Success',
        type: 'info',
        color: 'white',
        backgroundColor: 'green',
        duration: 400,
      });
    })
    .catch(err => {
      showMessage({
        message: 'Error',
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
