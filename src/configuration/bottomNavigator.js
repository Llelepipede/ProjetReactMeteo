import React from 'react';

import { View, Text } from "react-native";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Favorite from '../screens/Favorite';
import Position from '../screens/Position';
import HomeStack from './homeStack';

// import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const BottomNavigator = () => {
  const BottomStack = createMaterialBottomTabNavigator();

  return (
    // <div>
    //   <View style={{ flexDirection: 'row', margin: 10, marginHorizontal: 30, justifyContent: "space-between", }}>

    //     <Icon icon="map-marked-alt" />
    //     <Icon icon="cloud" />
    //     <Icon icon="heart" />
    //     <Icon icon="user-cog" />
    //     <Text>testtesttest</Text>
    //   </View>
    // </div>

    <BottomStack.Navigator>
      <BottomStack.Screen name="Position" component={Position} />
      <BottomStack.Screen name="HomeStack" component={HomeStack} />
      <BottomStack.Screen name="Favorite" component={Favorite} />
    </BottomStack.Navigator >
  );
}

// const Icon = (props) => (
//   <FontAwesome5 name={props.icon} size={25} style={{
//     marginBottom: 3,
//     alignSelf: "center",
//   }}
//   />
// )
export default BottomNavigator;
