import React from 'react';

import {ParamListBase} from '@react-navigation/routers';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard} from '../components';

const Stack = createStackNavigator<ParamListBase>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard" headerMode="screen">
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};
