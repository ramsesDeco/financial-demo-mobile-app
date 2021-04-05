import React from 'react';
import {Image, View} from 'react-native';
import {Caption, List, Text} from 'react-native-paper';
import {formatCurrency, formatDate} from '../../../../utils';

type Transaction = {
  id: number;
  name: string;
  category: string;
  amount: number;
  created_at: string;
  thumbnail: string;
};

export const TransactionItem = ({
  id,
  name,
  category,
  amount,
  created_at,
  thumbnail,
}: Transaction) => (
  <List.Item
    key={`transaction-${id.toString()}`}
    title={name}
    description={category}
    left={() => (
      <List.Icon
        icon={({size}) => (
          <Image
            source={{uri: thumbnail}}
            style={{
              width: size,
              height: size,
              resizeMode: 'contain',
            }}
          />
        )}
      />
    )}
    right={() => (
      <View style={{alignItems: 'flex-end'}}>
        <Caption>{formatDate(created_at)}</Caption>
        <Text>{formatCurrency(amount)}</Text>
      </View>
    )}
    onPress={() => {
      // TODO: add funcionality
    }}
  />
);
