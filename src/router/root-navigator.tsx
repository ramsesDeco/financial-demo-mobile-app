import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainNavigator} from './main-navigator';
import {DrawerContent} from '../components';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerContent}>
      <Drawer.Screen name="Home" component={MainNavigator} />
    </Drawer.Navigator>
  );
};
