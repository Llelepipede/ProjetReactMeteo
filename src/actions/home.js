import axios from 'axios';
import { showMessage } from 'react-native-flash-message';

export const STORE_METEO = 'STORE_METEO';

import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from 'react-redux';

import '../configuration/translation';

export const getMeteo = (coords) => dispatch => {
  axios({
    method: 'GET',
    url: `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&timezone=GMT&hourly=relativehumidity_2m,precipitation,temperature_2m,weathercode&current_weather=true`,
  })
    .then(res => {
      console.log("home corrds paramtre: ", coords);
      dispatch(storeMeteo(res.data));
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

export const storeMeteo = payload => ({
  type: STORE_METEO,
  payload,
});
