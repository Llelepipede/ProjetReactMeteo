import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {Text, SafeAreaView} from 'react-native';

import styled from 'styled-components';

import MeteoRedux from '../../components/meteoRedux';

const Home = () => {
  /* const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getDatas = async () => {
      try {
        const result = await axios.get(
          'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,windspeed_10m',
        );
        // Berlin
        setDatas(result.data.hourly);
        console.log('result', result.data.hourly);
      } catch (error) {
        console.log(error);
      }
    };
    getDatas();
  }, []);*/

  return (
    <SafeAreaView>
      <Text>Today</Text>
      <Container>
        <Text>T°C</Text>
        <Test>
          <Content>
            <Text>Wind</Text>
          </Content>

          <Content>
            <Text>Humidity</Text>
          </Content>

          <Content>
            <Text>Chance of rain</Text>
          </Content>
        </Test>
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
      <MeteoRedux />
    </SafeAreaView>
  );
};

const Container = styled.View`
  background-color: red;
  border-radius: 16px;
  height: 50%;
  margin: 4%;
`;
const Test = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 25%;
`;

const Content = styled.View`
  background-color: pink;
  border-radius: 10px;
  height: 80px;
  margin: 6px;
  width: 26%;
`;

export default Home;
