import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import GeolocGetTest from '../../components/Geoloc_Test';

const Geoloc_Test = ({navigation}) => {
  // creation de la fonction qui vas envoyer les donnees a l'API
  useEffect(() => {
    GeolocGetTest();
  });

  return (
    <View>
      <Text>Geoloc_Test</Text>
    </View>
  );
};

export default Geoloc_Test;
