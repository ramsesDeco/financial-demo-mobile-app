import React from 'react';
import {View} from 'react-native';
import {UserBalanceCard} from './user-balance-card';
import {TransactionList} from './transaction-list';

export const Dashboard = () => {
  return (
    <View>
      <UserBalanceCard />
      <TransactionList />
    </View>
  );
};
