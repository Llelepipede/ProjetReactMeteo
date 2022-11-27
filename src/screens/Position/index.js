import React, { useEffect } from 'react';

import { Text, View } from 'react-native';

import GetLocation from '../../components/GetLocation';

const Position = () => {
  useEffect(() => {
    console.log(GetLocation());
  });

  return <GetLocation />
};

export default Position;
