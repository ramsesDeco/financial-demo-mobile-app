import React from 'react';
import {ParamListBase} from '@react-navigation/routers';
import {createStackNavigator} from '@react-navigation/stack';
import {Header} from '../components';
import {TabNavigator} from './tab-navigator';

const Stack = createStackNavigator<ParamListBase>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      headerMode="screen"
      screenOptions={{
        header: Header,
      }}>
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
};
