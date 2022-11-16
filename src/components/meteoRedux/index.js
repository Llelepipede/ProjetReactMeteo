import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {getMeteo} from '../../actions/home';
import MeteoCard from './card';

const MeteoRedux = () => {
  const dispatch = useDispatch();
  const meteos = useSelector(state => state.meteo.value);

  useEffect(() => {
    console.log('MeteoRedux');
    dispatch(getMeteo());
  }, [dispatch]);

  return (
    /* <ScrollViewMeteo>
      <Text>Meteo Redux</Text>

      {meteos.map((meteo, index) => (
        <Text key={index}>{meteo.elevation}</Text>
      ))}
    </ScrollViewMeteo>*/
    <ScrollViewMeteo>
      <Text>Meteo Redux</Text>
      {meteos.map(meteo => {
        return <MeteoCard key={meteo.timezone} latitude={meteo.latitude} />;
      })}
    </ScrollViewMeteo>
  );
};

const ScrollViewMeteo = styled.ScrollView``;

export default MeteoRedux;
