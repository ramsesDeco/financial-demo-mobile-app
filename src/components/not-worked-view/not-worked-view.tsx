import React from 'react';
import {Card, Headline} from 'react-native-paper';

// NOTE: View to show pending views
export const NotWorkedView = () => {
  return (
    <Card style={{margin: 20}}>
      <Card.Content>
        <Headline style={{textAlign: 'center'}}>Vista en proceso...</Headline>
      </Card.Content>
    </Card>
  );
};
