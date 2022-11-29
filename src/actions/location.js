import axios from 'axios';
import { showMessage } from 'react-native-flash-message';

import Geolocation from '@react-native-community/geolocation';

export const STORE_LOCATION = 'STORE_LOCATION';


export const getLocation = () => dispatch => {

  Geolocation.setRNConfiguration({
    authorizationLevel: 'always',
    skipPermissionRequests: false,
  });

  Geolocation.requestAuthorization(
    () => {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position.coords);
          dispatch(storeLocation(position.coords));
        },
        error => {
          console.log(error.code, error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          forceRequestLocation: true,
        },
      );
    }, err => {
      console.log(err);
    },
  );
};

export const storeLocation = payload => ({
  type: STORE_LOCATION,
  payload,
});
