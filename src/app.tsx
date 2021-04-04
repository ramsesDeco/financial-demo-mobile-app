import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import {RootNavigator} from './router/root-navigator';

const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar />
        <RootNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
};
