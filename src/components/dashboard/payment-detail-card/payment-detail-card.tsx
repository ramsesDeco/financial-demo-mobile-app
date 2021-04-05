import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Card,
  Headline,
  Button,
  List,
  useTheme,
  Paragraph,
} from 'react-native-paper';
import {formatCurrency} from '../../../utils';

export const PaymentDetailCard = () => {
  const {
    colors: {primary},
  } = useTheme();

  return (
    <Card style={styles.paymentDetailContainer}>
      <Card.Content>
        <List.Item
          style={styles.removePadding}
          title={
            <View>
              <Paragraph>Tu próximo pago</Paragraph>
              <Headline style={styles.paymentAmount}>
                {formatCurrency('28860')}
              </Headline>
            </View>
          }
        />
        <List.Item
          style={styles.removePadding}
          title={
            <View>
              <Paragraph>Fecha de pago</Paragraph>
              <Headline>16 Enero</Headline>
            </View>
          }
          right={() => (
            <Button
              compact
              style={styles.alignSelfCenter}
              labelStyle={{fontSize: 10}}
              mode="contained"
              onPress={() => {
                // TODO: add funcionality
              }}>
              Pagar ahora
            </Button>
          )}
        />
        <List.Item
          style={styles.removePadding}
          title={<Paragraph>Mis logros</Paragraph>}
          left={() => (
            <List.Icon
              style={styles.paymentListIcon}
              color={primary}
              icon="trophy-award"
            />
          )}
          right={() => (
            <Paragraph style={styles.alignSelfCenter}>
              {formatCurrency('27260')}
            </Paragraph>
          )}
        />
        <List.Item
          style={styles.removePadding}
          title={<Paragraph>Compras con TDC</Paragraph>}
          left={() => (
            <List.Icon
              style={styles.paymentListIcon}
              color={primary}
              icon="credit-card"
            />
          )}
          right={() => (
            <Paragraph style={styles.alignSelfCenter}>
              {formatCurrency('16000')}
            </Paragraph>
          )}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  paymentDetailContainer: {
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
  },
  paymentAmount: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  removePadding: {
    padding: 0,
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  paymentListIcon: {
    width: 'auto',
    margin: 0,
  },
});
