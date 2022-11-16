import axios from 'axios';

export const STORE_METEO = 'STORE_METEO';

export const getMeteo = () => dispatch => {
  axios({
    method: 'GET',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,windspeed_10m',
  })
    .then(res => {
      console.log('res', res);
      dispatch(storeMeteo(res.data));
    })
    .catch(err => {
      console.log('err', err);
    });

};

export const storeMeteo = payload => ({
  type: STORE_METEO,
  payload,
});