import React from 'react';
import Geolocation from '@react-native-community/geolocation';

const GeolocGetTest = () => {
  if (true) {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
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

export default GeolocGetTest;
