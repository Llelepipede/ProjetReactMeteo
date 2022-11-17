import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import BottomNavigator from './bottomNavigator';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Prevision from '../screens/Prevision';

const Routes = props => {
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Login'}>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="BottomNavigator" component={BottomNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
