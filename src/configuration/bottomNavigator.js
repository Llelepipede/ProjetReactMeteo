import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View, Text } from 'react-native';

import Favorite from '../screens/Favorite';
import HomeStack from './homeStack';
import Position from '../screens/Position';
import Settings from '../screens/Settings';

import Icon from 'react-native-vector-icons/Ionicons';

const BottomNavigator = () => {
  const BottomStack = createMaterialBottomTabNavigator();

  return (
    <BottomStack.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: () => {
          return null;
        },
        tabBarColor: '#0B0F1A',
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Position') {
            icon = focused ? 'location' : 'location-outline';
          } else if (route.name === 'Home') {
            icon = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Favorite') {
            icon = focused ? 'heart' : 'heart-outline';
          } else {
            icon = focused ? 'settings' : 'settings-outline';
          }
          return <Icon name={icon} size={size} color={color} />;
        },
      })}>
      <BottomStack.Screen name="Position" component={Position} />
      <BottomStack.Screen name="HomeStack" component={HomeStack} />
      <BottomStack.Screen name="Favorite" component={Favorite} />
      <BottomStack.Screen name="Settings" component={Settings} />
    </BottomStack.Navigator>
  );
};

export default BottomNavigator;
