import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native';

const Offline = () => {
  return (
    <SafeAreaView>
      <Lottie source={require('../../assets/SplashScreen/weather-splash.json')} autoPlay loop />
    </SafeAreaView>
  );
};

export default Offline;
