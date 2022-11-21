import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import WeatherCode from '../../components/WeatherCode';

import styled from 'styled-components';

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [currentHumid, setCurrentHumid] = useState('');
  const [currentPrecipitation, setCurrentPrecipitation] = useState('');
  const [currentLogo, setCurrentLogo] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getDatas = async () => {
      try {
        const result = await axios.get(
          'https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&timezone=GMT&hourly=relativehumidity_2m,precipitation&current_weather=true',
        );
        setDatas(result.data.current_weather);
        const index = result.data.hourly.time.indexOf(
          result.data.current_weather.time,
        );
        setCurrentHumid(result.data.hourly.relativehumidity_2m[index]);
        setCurrentPrecipitation(result.data.hourly.precipitation[index]);
        setCurrentLogo(WeatherCode(result.data.current_weather.weathercode));
        console.log(currentLogo);
      } catch (error) {
        console.log(error);
      }
    };
    getDatas();
  }, []);

  return (
    <View>
      <Text>Today</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeStack', {screen: 'Prevision'})}>
        <Text>7 days</Text>
      </TouchableOpacity>
      <Container>
        <Image source={currentLogo} />
        <Title>T°C</Title>
        <Title>{datas.temperature}</Title>
        <Content>
          <Box>
            <Title>Wind</Title>
            <Title>{datas.windspeed} km/h</Title>
          </Box>

          <Box>
            <Title>Humidity</Title>
            <Title>{currentHumid} %</Title>
          </Box>

          <Box>
            <Title>Chance of rain</Title>
            <Title>{currentPrecipitation}%</Title>
          </Box>
        </Content>
      </Container>
    </View>
  );
};

const Container = styled.View`
  background-color: ${props => props.theme.darkGreyColor};
  border-radius: 16px;
  height: 50%;
  margin: 4%;
`;
const Content = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 25%;
`;
const Box = styled.View`
  background-color: ${props => props.theme.greyColor};
  border-radius: 10px;
  height: 80px;
  margin: 6px;
  width: 26%;
`;
const Title = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  text-align: center;
  font-size: 10px;
`;

export default Home;
