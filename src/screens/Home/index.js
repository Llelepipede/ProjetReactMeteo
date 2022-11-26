import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import WeatherCode from '../../components/WeatherCode';
import { storeMeteo, getMeteo } from '../../actions/home';

import styled from 'styled-components';

import Wind from '../../assets/weather/wind.png';
import Rain from '../../assets/weather/rain.png';
import Humidity from '../../assets/weather/humidity.png';

const Home = () => {
  const dispatch = useDispatch();
  const callAPI = useSelector(state => state.meteo.value)

  const [datas, setDatas] = useState([]);
  const [currentHumid, setCurrentHumid] = useState('');
  const [currentPrecipitation, setCurrentPrecipitation] = useState('');
  const [currentLogo, setCurrentLogo] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getMeteo());

    setDatas(callAPI.current_weather);

    const index = callAPI.hourly.time.indexOf(
      callAPI.current_weather.time,
    );
    setCurrentHumid(callAPI.hourly.relativehumidity_2m[index]);
    setCurrentPrecipitation(callAPI.hourly.precipitation[index]);
    setCurrentLogo(WeatherCode(callAPI.current_weather.weathercode));

  }, [dispatch]);

  return (
    <Container>
      <Tttt>
        <Textii>Today</Textii>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeStack', { screen: 'Prevision' })}>
          <Textii>7 days ›</Textii>
        </TouchableOpacity>
      </Tttt>

      <Contento>
        <Cont>
          <Image source={currentLogo} />
          <Azer>{datas.temperature}°</Azer>
        </Cont>
        <Content>
          <Box>
            <Image source={Wind} />
            <Title>Wind</Title>
            <Description>{datas.windspeed} Km/h</Description>
          </Box>

          <Box>
            <Image source={Humidity} />
            <Title>Humidity</Title>
            <Description>{currentHumid}%</Description>
          </Box>

          <Box>
            <Image source={Rain} />
            <Title>Chance of rain</Title>
            <Description>{currentPrecipitation}mm</Description>
          </Box>
        </Content>
      </Contento>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${props => props.theme.blackColor};
  height: 100%;
`
const Tttt = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 4%;
`
const Textii = styled.Text`
  color: ${props => props.theme.lightGreyColor};
`
const Azer = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  font-size: 60px;
`
const Contento = styled.View`
  background-color: ${props => props.theme.darkGreyColor};
  border-radius: 16px;
  height: 35%;
  margin: 4%;
`;
const Cont = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
`
const Content = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const Box = styled.View`
  background-color: ${props => props.theme.darkGreyColor};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 80px;
  width: 26%;
  margin: 2%;
`
const Title = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  margin: 4% 0 4% 0;
  font-weight: bold;
  font-size: 10px;
`
const Description = styled.Text`
  color: ${props => props.theme.whiteColor};
  font-weight: bold;
  font-size: 12px;
`

export default Home;
