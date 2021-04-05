import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {useQuery} from '@apollo/client';

import {RootNavigator} from './router/root-navigator';
import {getTheme} from './theme';
import {GET_THEME_MODE} from './store';

export const App = () => {
  const {data} = useQuery(GET_THEME_MODE, {
    fetchPolicy: 'cache-only',
  });

  const deviceColor = useColorScheme();
  const theme = getTheme(data?.themeMode ?? deviceColor);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};
