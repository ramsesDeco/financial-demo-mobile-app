import React from 'react';
import {View} from 'react-native';
import {UserBalanceCard} from './user-balance-card';
import {TransactionList} from './transaction-list';
import {ShortcutFeatures} from './shortcut-features';

export const Dashboard = () => {
  return (
    <View>
      <UserBalanceCard />
      <ShortcutFeatures />
      <TransactionList />
    </View>
  );
};
