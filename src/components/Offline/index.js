import React from 'react';
import Lottie from 'lottie-react-native';
import {Text, SafeAreaView, View} from 'react-native';

const Offline = () => {
  return (
    <SafeAreaView>
      <View>
      <Lottie source={require('../../assets/SplashAnimation/weather-splash.json')} autoPlay loop />
      </View>
    </SafeAreaView>
  );
};

export default Offline;
