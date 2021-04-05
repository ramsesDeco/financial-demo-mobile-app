import {useQuery} from '@apollo/client';
import React from 'react';
import {FlatList} from 'react-native';
import {
  ActivityIndicator,
  Button,
  Divider,
  Headline,
  List,
} from 'react-native-paper';
import {GET_USER_TRANSACTIONS} from '../../../store';
import {TransactionItem} from './transaction-item';

// TODO: handle user info via login-in screen
const USER_ID = 1;

export const TransactionList = ({
  ListHeaderComponent,
}: {
  ListHeaderComponent: React.ElementType;
}) => {
  const {data, loading, refetch} = useQuery(GET_USER_TRANSACTIONS, {
    variables: {id: USER_ID},
  });

  const transactions = data?.user?.transactions ?? [];

  const renderListHeader = () => (
    <>
      <ListHeaderComponent />
      <List.Item
        title={<Headline>Tus movimientos</Headline>}
        right={() => (
          <Button
            compact
            uppercase={false}
            style={{
              alignSelf: 'center',
            }}
            onPress={() => {
              refetch();
            }}>
            Ver todos
          </Button>
        )}
      />
    </>
  );

  const renderLoadingFooter = () => {
    if (!loading) return null;

    return <ActivityIndicator size="large" />;
  };

  return (
    <FlatList
      data={transactions}
      ListFooterComponent={renderLoadingFooter}
      ListHeaderComponent={renderListHeader}
      ItemSeparatorComponent={Divider}
      renderItem={({item}) => <TransactionItem {...item} />}
    />
  );
};
