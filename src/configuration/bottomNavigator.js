import React from 'react';

import { View, Text } from "react-native";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons'


// Screens
import Favorite from '../screens/Favorite';
import Home from '../screens/Home';
import Position from '../screens/Position';


//Screen Names
const favoriName = 'Favorite';
const homeName = 'Home';
const positionName = 'Position';

const BottomNavigator = () => {
  
  const BottomStack = createMaterialBottomTabNavigator();

  return (
    <BottomStack.Navigator initialRouteName={homeName}
    screenOptions = {({route}) => ({
      headerShown : false,
      tabBarIcon : ({focused, color , size}) =>{
        let iconName;

        if (route.name === homeName) {
          iconName = focused ? 'albums' : 'albums-outline';
        }else if (route.name === favoriName) {
            iconName = focused ? 'albums' : 'albums-outline';
        }else if (route.name === positionName) {
          iconName = focused ? 'albums' : 'albums-outline';
        }
          return  <Icon name={iconName} size={size} color={color} />
        },
    })}
    >
        
      <BottomStack.Screen name={positionName} component={Position} /> 
      <BottomStack.Screen name={homeName} component={Home} />
      <BottomStack.Screen name={favoriName} component={Favorite} />
    </BottomStack.Navigator >
  );
}

export default BottomNavigator;
