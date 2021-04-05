import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text, Headline} from 'react-native-paper';
import {formatCurrency} from '../../../utils';

export const UserBalanceCard = () => {
  return (
    <Card style={styles.userBalanceContainer}>
      <Card.Content>
        <Text style={styles.userBalanceTitle}>Saldo disponible</Text>
        <Headline style={styles.userBalanceAmount}>
          {formatCurrency('1499970')}
        </Headline>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  userBalanceContainer: {
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    marginTop: 20,
  },
  userBalanceTitle: {
    textTransform: 'uppercase',
  },
  userBalanceAmount: {
    color: '#bb63c8',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 28,
  },
});
