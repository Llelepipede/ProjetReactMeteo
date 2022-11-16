import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getMeteo } from '../actions/home';

const MeteoRedux = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.meteo.value);

  useEffect(() => {
    console.log('MeteoRedux');
    dispatch(getMeteo());
  }, [dispatch]);

  return (
    <ScrollViewMeteo>
      <Text>Meteo Redux</Text>
      {characters.map((meteo, index) => (
        <Text key={index}>{meteo.name}</Text>
      ))}
    </ScrollViewMeteo>
  );
};

const ScrollViewMeteo = styled.ScrollView``;

export default MeteoRedux;