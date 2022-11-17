import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Prevision = () => {
  const [datas, setDatas] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getDatas = async () => {
      try {
        const result = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&timezone=GMT&daily=temperature_2m_max,temperature_2m_min')
        setDatas(result.data.daily);
        console.log('result', result.data.daily);
      } catch (error) {
        console.log(error)
      }
    }
    getDatas();
  }, []);

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Back</Text>
      </TouchableOpacity>
      <Text>Next 7 days</Text>
      <Text>{datas.time}</Text>
      <Text>{datas.temperature_2m_max}°C</Text>
      <Text>{datas.temperature_2m_min}°C</Text>
    </View>
  );
}

export default Prevision;
