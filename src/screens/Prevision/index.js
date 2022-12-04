import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Image, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import WeatherCode from '../../components/WeatherCode';
import { storePrevision, getPrevision } from '../../actions/prevision';

import styled from 'styled-components';

import { useTranslation } from "react-i18next";

import '../../configuration/translation';

import { MotiView, MotiText, useAnimationState } from 'moti';


const Prevision = () => {
  const dispatch = useDispatch();
  const callAPI = useSelector(state => state.prevision.value);
  const Geoloc = useSelector(state => state.location.value);

  const [datas, setDatas] = useState([]);
  const [prevision, setPrevision] = useState([]);
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  const array = [];

  useEffect(() => {
    dispatch(getPrevision(Geoloc));
  }, [dispatch]);

  useEffect(() => {
    if (!callAPI.daily?.time || !callAPI.daily?.temperature_2m_min || !callAPI.daily?.temperature_2m_max || !callAPI.daily?.weathercode) {
      return;
    }
    for (let i = 0; i < 7; i++) {
      let newItem = {
        date: callAPI.daily.time[i],
        temperature_min: callAPI.daily.temperature_2m_min[i],
        temperature_max: callAPI.daily.temperature_2m_max[i],
        weatherCode: WeatherCode(callAPI.daily.weathercode[i]),
      };
      array.push(newItem);
    }
    setPrevision(array);
  }, [callAPI])

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Title>‹ {t('back')}</Title>
      </TouchableOpacity>
      <Subtitle>{t('nextDay')}</Subtitle>

      <AnimatedView
        from={{
          opacity: 0,
          scale: 0.4,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: 'timing',
          duration: 1000,
          scale: {
            type: 'spring',
            delay: 100,
          },
        }}>
        <BoxContent>
          {prevision.map((item, key) => {
            return (
              <Content key={item.id}>
                <Date>{item.date}</Date>
                <Picture source={item.weatherCode} />
                <Temperature>
                  <TemperatureMax>{item.temperature_max}°</TemperatureMax>
                  <TemperatureMin>{item.temperature_min}°</TemperatureMin>
                </Temperature>
              </Content>
            );
          })}
        </BoxContent>
      </AnimatedView>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${props => props.theme.blackColor};
  height: 100%;
`;
const Title = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  font-size: 16px;
  margin: 4% 4% 2% 4%;
`;
const Subtitle = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  font-weight: bold;
  font-size: 18px;
  margin: 8% 4% 8% 4%;
`;
const BoxContent = styled.View`
 background-color: ${props => props.theme.darkGreyColor};
  border-radius: 16px;
  margin: 4%;
`
const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 4%;
`;
const Date = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  font-weight: bold;
  font-size: 18px;
`;
const Picture = styled.Image`
  height: 40px;
  width: 40px;
`;
const Temperature = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 25%;
`;
const TemperatureMax = styled.Text`
  color: ${props => props.theme.whiteColor};
  font-weight: bold;
  font-size: 16px;
`;
const TemperatureMin = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  font-weight: bold;
  font-size: 16px;
`;
const AnimatedView = styled(MotiView)`
  height: 100%;
  width: 100%%;
`;

export default Prevision;
