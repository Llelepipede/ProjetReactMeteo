import React from 'react';
import {SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native';
import styled from 'styled-components';



const Offline = () => {
  return (
    <Container><SafeAreaView
    style={{flex : 1}}>
      <Lottie source={require('../../assets/SplashScreen/t-rex_No-Network.json')} 
      autoPlay loop= { false }
      onAnimationFinish
      />
    </SafeAreaView></Container>
  );
};

export default Offline;

const Container = styled.View`
  background-color: white;
  flex: 1;
`;