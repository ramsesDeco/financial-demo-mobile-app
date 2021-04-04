import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

import {RootNavigator} from './router/root-navigator';

export const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar />
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};
