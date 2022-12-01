import React from 'react';
import {SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native';
import styled from 'styled-components';


const SplashScreen = ({navigation}) => {
  return (
    <Container><SafeAreaView
    style={{flex : 1}}>
      <Lottie source={require('../../assets/SplashScreen/weather-splash.json')} 
      autoPlay loop= { false }
      onAnimationFinish = {()=> navigation.navigate('Login')}
      />
    </SafeAreaView></Container>
  );
};

export default SplashScreen;

const Container = styled.View`
  background-color: black;
  flex: 1;
`;