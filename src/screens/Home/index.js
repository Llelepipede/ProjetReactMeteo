import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import WeatherCode from '../../components/WeatherCode';

import styled from 'styled-components';

// import Icon from 'react-native-vector-icons/MaterialIcons'

import Wind from '../../assets/weather/wind.png';
import Rain from '../../assets/weather/rain.png';
import Humidity from '../../assets/weather/humidity.png';

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
          'https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&timezone=GMT&hourly=relativehumidity_2m,precipitation,temperature_2m,weathercode&current_weather=true',
        );
        setDatas(result.data.current_weather);
        // console.log(result.data);
        const index = result.data.hourly.time.indexOf(
          result.data.current_weather.time,
        );
        setCurrentHumid(result.data.hourly.relativehumidity_2m[index]);
        setCurrentPrecipitation(result.data.hourly.precipitation[index]);
        setCurrentLogo(WeatherCode(result.data.current_weather.weathercode));
      } catch (error) {
        console.log(error);
      }
    };
    getDatas();
  }, []);

  return (
    <Container>
      {/* <Button title='My Position' /> */}
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
  /* border: 1px solid red; */
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
