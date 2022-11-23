import React from 'react';

import { Dimensions, SafeAreaView } from 'react-native';

import { ThemeProvider } from 'styled-components';

import Routes from './src/configuration/routes';

import theme from './src/configuration/theme';

import styled from 'styled-components';

import { Provider } from 'react-redux';

import { store } from './src/configuration/store';

// import GlobalStyle from './src/configuration/globalStyles';

const App = () => {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: Dimensions.get('window').height,
      }}>
      <ThemeProvider theme={theme}>
        {/* <GlobalStyle /> */}
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
