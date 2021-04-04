import React from 'react';
import {View, Text} from 'react-native';
import {TransactionList} from './transaction-list';

export const Dashboard = () => {
  return (
    <View>
      <Text>Dashboard</Text>
      <TransactionList />
    </View>
  );
};
