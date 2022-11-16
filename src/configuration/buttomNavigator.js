import React from 'react';

import {View, Text} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ButtomNavigator = () => {
  return (
    <div>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          marginHorizontal: 30,
          justifyContent: 'space-between',
        }}>
        <Icon icon="map-marked-alt" />
        <Icon icon="cloud" />
        <Icon icon="heart" />
        <Icon icon="user-cog" />
        <Text>testtesttest</Text>
      </View>
    </div>
  );
};

const Icon = props => (
  <FontAwesome5
    name={props.icon}
    size={25}
    style={{
      marginBottom: 3,
      alignSelf: 'center',
    }}
  />
);
export default ButtomNavigator;
