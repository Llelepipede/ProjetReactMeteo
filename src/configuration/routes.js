import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {NetworkConsumer, NetworkProvider} from 'react-native-offline';

import BottomNavigator from './bottomNavigator';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Prevision from '../screens/Prevision';
import Offline from '../components/Offline';

const Routes = props => {
  const RootStack = createStackNavigator();

  return (
    <NetworkProvider>
      <NetworkConsumer>
        {({isConnected}) =>
          isConnected ? (
            <NavigationContainer>
              <RootStack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName={'Login'}>
                <RootStack.Screen name="Login" component={Login} />
                <RootStack.Screen
                  name="BottomNavigator"
                  component={BottomNavigator}
                />
              </RootStack.Navigator>
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
