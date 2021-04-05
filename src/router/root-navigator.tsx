import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainNavigator} from './main-navigator';
import {DrawerContent} from '../components';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Root" drawerContent={DrawerContent}>
      <Drawer.Screen name="Root" component={MainNavigator} />
    </Drawer.Navigator>
  );
};
