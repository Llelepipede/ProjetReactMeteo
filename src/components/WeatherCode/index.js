import React from 'react';
import {
  clearDay,
  partlyCloud,
  overcast,
  fog,
  showers,
  thunderstormSnow,
  thunderstormShower,
  heavyShower,
  snow,
  heavySnow,
  heavySleet,
} from '../../assets/logo';

const WeatherCode = weathercode => {
  switch (weathercode) {
    case (0, 1):
      return clearDay;
    case 2:
      return partlyCloud;
    case 3:
      return overcast;
    case (45, 48, 51, 53, 55, 56, 57):
      return fog;
    case (61, 80):
      return showers;
    case (63, 65, 81, 82):
      return heavyShower;
    case 67:
      return heavySleet;
    case 66:
      return sleet;
    case (71, 77, 85):
      return snow;
    case (73, 75, 86):
      return heavySnow;
    case 95:
      return thunderstormShower;
    case (96, 99):
      return thunderstormSnow;
    default:
      return clearDay;
  }
};
export default WeatherCode;
