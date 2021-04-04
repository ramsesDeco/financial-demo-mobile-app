import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {RootNavigator} from './router/root-navigator';

export const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootNavigator />
    </NavigationContainer>
  );
};
