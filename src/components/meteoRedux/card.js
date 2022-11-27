import React from 'react';
import { Text, View } from 'react-native';

const MeteoCard = (props) => {
  return (
    <View>
      <Text>{props.latitude}</Text>
    </View>
  );
};

export default MeteoCard;
