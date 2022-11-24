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
        // console.log('prevision', result.data.daily);
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

      {/* To do: un tableau avec les 4 valeurs, date du jour, temperature_2m_max, temperature_2m_min et weathercode */}

      <FlatList
        data={datas}
        renderItem={({ item }) => {
          console.log('item', item.temperature_2m_max)
          return (
            <View>
              <Title>{item.temperature_2m_max}</Title>
              <Title>{item.temperature_2m_min}</Title>
            </View>
          )
        }}
        keyExtractor={item => item.id}

      />
      {/* {datas.map((data) => {
        return (
          <Text>{data.daily.temperature_2m_max}</Text>
        )
      })} */}
    </Container>
  );
};

const Container = styled.View`
  background-color: ${props => props.theme.blackColor};
  height: 100%;
`
const Title = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  font-size: 14px;
  margin: 4%;
`
const Subtitle = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  font-weight: bold;
  font-size: 14px;
  margin: 4%;
`

export default Prevision;
