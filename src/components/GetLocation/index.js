import React from 'react';

import Geolocation from '@react-native-community/geolocation';

const Getlocation = () => {
  if (true) {
    Geolocation.getCurrentPosition(
      position => {
        return position.coords;
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        forceRequestLocation: true,
      },
    );
  }
};

export default Getlocation;
