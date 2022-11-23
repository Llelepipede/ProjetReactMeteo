import React from 'react';

import { Dimensions, SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';

import Routes from './src/configuration/routes';
import { store } from './src/configuration/store';
import theme from './src/configuration/theme';


import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';


const App = () => {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: Dimensions.get('window').height,
      }}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </SafeAreaView>
    /*
    <Provider store={store}>
      <Routes />
    </Provider>
    */
  );
};

export default App;
