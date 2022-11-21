import React from 'react';

import { View, Text } from "react-native";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Favorite from '../screens/Favorite';
import Position from '../screens/Position';
import HomeStack from './homeStack';

const BottomNavigator = () => {
  const BottomStack = createMaterialBottomTabNavigator();

  return (
    <BottomStack.Navigator>
      <BottomStack.Screen name="Position" component={Position} />
      <BottomStack.Screen name="HomeStack" component={HomeStack} />
      <BottomStack.Screen name="Favorite" component={Favorite} />
    </BottomStack.Navigator >
  );
}

export default BottomNavigator;
