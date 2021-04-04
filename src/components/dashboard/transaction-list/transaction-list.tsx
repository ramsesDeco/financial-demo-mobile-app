import {useQuery} from '@apollo/client';
import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator, List} from 'react-native-paper';
import {GET_USER_TRANSACTIONS} from '../../../store';

// TODO: handler user state
const USER_ID = 1;

export const TransactionList = () => {
  const {data, loading} = useQuery(GET_USER_TRANSACTIONS, {
    variables: {id: USER_ID},
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  const transactions = data?.user?.transactions ?? [];

  return (
    <View>
      {transactions.map(({name}: any) => (
        <List.Item title={name} />
      ))}
    </View>
  );
};
