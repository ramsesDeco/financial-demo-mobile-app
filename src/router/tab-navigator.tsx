import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {IconButton, useTheme} from 'react-native-paper';
import {Dashboard, NotWorkedView} from '../components';

const Tab = createMaterialBottomTabNavigator();

export const TabNavigator = () => {
  const {
    colors: {surface},
  } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{backgroundColor: surface}}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <IconButton icon="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={NotWorkedView}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <IconButton icon="cash" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CreditCardSettings"
        component={NotWorkedView}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <IconButton icon="credit-card-settings" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={NotWorkedView}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <IconButton icon="star-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotWorkedView}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <IconButton icon="bell-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
