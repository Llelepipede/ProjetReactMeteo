import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginMeteo from '../screens/LoginMeteo';
import Home from '../screens/Home';

import {NetworkConsumer, NetworkProvider} from 'react-native-offline';

import Offline from '../components/offline';

const Routes = props => {
  const Stack = createNativeStackNavigator();

  return (
    <NetworkProvider>
      <NetworkConsumer>
        {({isConnected}) =>
          isConnected ? (
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{title: 'Home'}}
                />
                <Stack.Screen
                  name="Login"
                  component={LoginMeteo}
                  options={{title: 'Login'}}
                />
              </Stack.Navigator>
            </NavigationContainer>
          ) : (
            <Offline />
          )
        }
      </NetworkConsumer>
    </NetworkProvider>
  );
};

export default Routes;
