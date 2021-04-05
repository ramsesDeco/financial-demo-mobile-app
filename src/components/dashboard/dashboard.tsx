import React from 'react';
import {View} from 'react-native';
import {UserBalanceCard} from './user-balance-card';
import {TransactionList} from './transaction-list';
import {ShortcutFeatures} from './shortcut-features';
import {PaymentDetailCard} from './payment-detail-card';

export const Dashboard = () => {
  return (
    <View>
      <UserBalanceCard />
      <ShortcutFeatures />
      <PaymentDetailCard />
      <TransactionList />
    </View>
  );
};
