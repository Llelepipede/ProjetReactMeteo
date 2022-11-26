import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components';

const Prevision = () => {
  const [datas, setDatas] = useState([]);
  const [prevision, setPrevision] = useState([]);
  const navigation = useNavigation();

  const array = [];

  useEffect(() => {
    const getDatas = async () => {
      try {
        const result = await axios.get(
          'https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&timezone=GMT&daily=temperature_2m_max,temperature_2m_min,weathercode',
        );
        setDatas(result.data.daily);

        for (let i = 0; i < 7; i++) {
          let newItem = {
            date: result.data.daily.time[i],
            temperature_min: result.data.daily.temperature_2m_min[i],
            temperature_max: result.data.daily.temperature_2m_max[i],
            weatherCode: result.data.daily.weathercode[i]
          };
          array.push(newItem);
        }
        setPrevision(array);
      } catch (error) {
        console.log(error);
      }
    };
    getDatas();
  }, []);

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Title>‹ Back</Title>
      </TouchableOpacity>
      <Subtitle>Next 7 days</Subtitle>

      {prevision.map((item, key) => {
        return (
          <Content key={item.id}>
            <Date>{item.date}</Date>
            <Temperature>
              <TemperatureMax>{item.temperature_max}°</TemperatureMax>
              <TemperatureMin>{item.temperature_min}°</TemperatureMin>
            </Temperature>
          </Content>
        )
      })}
    </Container>
  );
};

const Container = styled.View`
  background-color: ${props => props.theme.blackColor};
  height: 100%;
`
const Title = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  font-size: 16px;
  margin: 4% 4% 2% 4%;
`
const Subtitle = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  font-weight: bold;
  font-size: 18px;
  margin: 8% 4% 8% 4%;
`
const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 4%;
`
const Date = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  font-weight: bold;
  font-size: 18px;
`
const Temperature = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const TemperatureMax = styled.Text`
  color: ${props => props.theme.whiteColor};
  font-weight: bold;
  font-size: 18px;
`
const TemperatureMin = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  font-weight: bold;
  font-size: 18px;
`

export default Prevision;
