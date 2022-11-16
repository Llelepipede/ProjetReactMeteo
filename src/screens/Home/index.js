import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components';

const Home = () => {
  const [datas, setDatas] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {

    const getDatas = async () => {
      try {
        const result = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
        // Berlin 
        setDatas(result.data.hourly);
        console.log('result', result.data.hourly);
      } catch (error) {
        console.log(error)
      }
    }
    getDatas();
  }, []);

  return (
    <View>
      <Text>Today</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Prevision')}>
        <Text>7 days</Text>
      </TouchableOpacity>
      <Container>

        <Text>T°C</Text>
        <Content>
          <Box>
            <Title>Wind</Title>
          </Box>

          <Box>
            <Title>Humidity</Title>
          </Box>

          <Box>
            <Title>Chance of rain</Title>
          </Box>
        </Content>

      </Container>
      {/* {datas.map((data) => {
        return (
          <View>
            <Text>
              {data.time}
            </Text>
          </View>
        )
      })} */}
    </View>
  );
}

const Container = styled.View`
  background-color: ${props => props.theme.darkGreyColor};
  border-radius: 16px;
  height: 50%;
  margin: 4%;
`
const Content = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 25%;
`
const Box = styled.View`
  background-color: ${props => props.theme.greyColor};
  border-radius: 10px;
  height: 80px;
  margin: 6px;
  width: 26%;
`
const Title = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  text-align: center;
  font-size: 10px;
`


export default Home;
