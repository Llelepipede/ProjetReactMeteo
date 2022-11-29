import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import WeatherCode from '../../components/WeatherCode';
import { storeMeteo, getMeteo } from '../../actions/home';
import Capital from '../../assets/Capital/capital.json';

import styled from 'styled-components';

import Wind from '../../assets/weather/wind.png';
import Rain from '../../assets/weather/rain.png';
import Humidity from '../../assets/weather/humidity.png';

// import Geolocation from '@react-native-community/geolocation';

import { useTranslation } from "react-i18next";

import '../../configuration/translation';

const Home = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const callAPI = useSelector(state => state.meteo.value);
  const Geoloc = useSelector(state => state.location.value);
  const [datas, setDatas] = useState([]);
  const [capital, setCapital] = useState([]);
  const [currentCapital, setCurrentCapital] = useState({});
  const [currentHumid, setCurrentHumid] = useState('');
  const [currentPrecipitation, setCurrentPrecipitation] = useState('');
  const [currentLogo, setCurrentLogo] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    console.log('callAPI', callAPI);
    setCapital(Capital.capital);
    dispatch(getMeteo(Geoloc));
  }, [dispatch]);

  useEffect(() => {
    if (!callAPI.hourly?.time) {
      return;
    }
    setDatas(callAPI.current_weather);

    const index = callAPI.hourly.time.indexOf(callAPI.current_weather.time);
    setCurrentHumid(callAPI.hourly.relativehumidity_2m[index]);
    setCurrentPrecipitation(callAPI.hourly.precipitation[index]);
    setCurrentLogo(WeatherCode(callAPI.current_weather.weathercode));
  }, [callAPI]);

  return (
    <Container>
      <Button>
        <ButtonContainer>Paris</ButtonContainer>
      </Button>

      <BoxContainer>
        <TextContainer>{t("today")}</TextContainer>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('HomeStack', { screen: 'Prevision' })
          }>
          <TextContainer>{t("days")} ›</TextContainer>
        </TouchableOpacity>
      </BoxContainer>

      <DetailsContainer>
        <FirstContent>
          <Image source={currentLogo} />
          <Azer>{datas.temperature}°</Azer>
        </FirstContent>
        <SecondContent>
          <Box>
            <Image source={Wind} />
            <Title>{t("wind")}</Title>
            <Description>{datas.windspeed} Km/h</Description>
          </Box>

          <Box>
            <Image source={Humidity} />
            <Title>{t("humidity")}</Title>
            <Description>{currentHumid}%</Description>
          </Box>

          <Box>
            <Image source={Rain} />
            <Title>{t("rainRisk")}</Title>
            <Description>{currentPrecipitation}mm</Description>
          </Box>
        </SecondContent>
      </DetailsContainer>

      {/* {capital.map((item) => {
        return (
          <TouchableOpacity onPress={(item) => dispatch(({ ...item }))}>
            <Title>{item.name}</Title>
          </TouchableOpacity>
        )
      })} */}
    </Container>
  );
};

const Container = styled.View`
  background-color: ${props => props.theme.blackColor};
  height: 100%;
`;
const Button = styled.View`
  border: 1px solid ${props => props.theme.lightGreyColor};
  margin: 6% 4% 10% 48%;
  align-items: center;
  border-radius: 6px;
  padding: 16px;
  width: 48%;
`;
const ButtonContainer = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  font-weight: bold;
  font-size: 16px;
`;
const BoxContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 4%;
`;
const TextContainer = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  font-weight: bold;
  font-size: 18px;
`;
const Azer = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  font-size: 60px;
`;
const DetailsContainer = styled.View`
  background-color: ${props => props.theme.darkGreyColor};
  border-radius: 16px;
  height: 35%;
  margin: 4%;
`;
const FirstContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const SecondContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Box = styled.View`
  background-color: ${props => props.theme.darkGreyColor};
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 80px;
  width: 26%;
  margin: 2%;
`;
const Title = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  margin: 4% 0 4% 0;
  font-weight: bold;
  font-size: 10px;
`;
const Description = styled.Text`
  color: ${props => props.theme.whiteColor};
  font-weight: bold;
  font-size: 12px;
`;

export default Home;
