import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginMeteo from '../screens/LoginMeteo';
import Geoloc_Test from '../screens/Geoloc_Test';

const Routes = props => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="/Geo"
          component={Geoloc_Test}
          options={{title: 'Geoloc_Test'}}
        />
        <Stack.Screen
          name="/"
          component={LoginMeteo}
          options={{title: 'Login'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
