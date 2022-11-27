import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Prevision from '../screens/Prevision';

const HomeStack = () => {
  const RootStack = createStackNavigator();

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Prevision" component={Prevision} />
    </RootStack.Navigator>
  );
};

export default HomeStack;
