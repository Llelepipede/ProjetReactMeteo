import React from 'react';

import { Dimensions, SafeAreaView } from 'react-native';

import { ThemeProvider } from 'styled-components';

import Routes from './src/configuration/routes';

import theme from './src/configuration/theme';

import {Provider} from 'react-redux';

import { store } from './src/configuration/store';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView
        style={{
          width: '100%',
          height: Dimensions.get('window').height,
        }}>
        <ThemeProvider theme={theme}>
          <Routes />
          <FlashMessage position={'center'} />
        </ThemeProvider>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
