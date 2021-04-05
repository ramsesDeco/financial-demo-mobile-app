import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {ApolloClient, ApolloProvider} from '@apollo/client';

import AsyncStorage from '@react-native-community/async-storage';
import {persistCache} from 'apollo3-cache-persist';
import {ActivityIndicator} from 'react-native-paper';
import {App} from './app';
import {cache} from './store';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache,
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
  connectToDevTools: true,
});

export const AppContainer: () => JSX.Element = () => {
  const [loadingCache, setLoadingCache] = useState(true);

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false));
  }, []);

  if (loadingCache) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};
