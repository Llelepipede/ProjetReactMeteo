import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';


import BottomNavigator from './bottomNavigator';

import Login from '../screens/Login';
import Home from '../screens/Home';

const Routes = props => {
  // const Stack = createNativeStackNavigator();
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginMeteo}
          options={{ title: 'Login' }}
        />
      </Stack.Navigator> */}
      <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Login'}>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="BottomNavigator" component={BottomNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
