import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {Appbar, Avatar, useTheme} from 'react-native-paper';

export const Header = ({scene, previous, navigation}: StackHeaderProps) => {
  const theme = useTheme();

  const userInfo = {
    name: 'ramses',
    thumbnail: 'https://i.imgur.com/ZiCMc8u.png',
  };

  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : !previous
      ? `Hi ${userInfo.name}`
      : scene.route.name;

  return (
    <Appbar.Header
      theme={{colors: {primary: theme.colors.surface}}}
      style={{shadowOpacity: 0, elevation: 0}}>
      {previous && (
        <Appbar.BackAction
          onPress={navigation.goBack}
          color={theme.colors.primary}
        />
      )}
      <Appbar.Content
        title={title}
        titleStyle={{
          fontSize: 18,
          fontWeight: 'bold',
          color: theme.colors.primary,
        }}
      />
      <TouchableOpacity
        style={{marginLeft: 10}}
        onPress={() => {
          ((navigation as any) as DrawerNavigationProp<{}>).openDrawer();
        }}>
        <Avatar.Image
          size={40}
          source={{
            uri: userInfo.thumbnail,
          }}
        />
      </TouchableOpacity>
    </Appbar.Header>
  );
};
