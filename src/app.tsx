import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

import {RootNavigator} from './router/root-navigator';
import {getTheme} from './theme';

export const App = () => {
  const theme = getTheme();
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};
