import React from 'react';

import {Dimensions, SafeAreaView} from 'react-native';

import {ThemeProvider} from 'styled-components';

import Routes from './src/configuration/routes';

import theme from './src/configuration/theme';

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
  );
};

export default App;
