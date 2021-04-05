import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Avatar, Drawer, Title, IconButton} from 'react-native-paper';
import Animated from 'react-native-reanimated';

export const DrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
) => {
  const userInfo = {
    name: 'ramses',
    thumbnail: 'https://i.imgur.com/ZiCMc8u.png',
  };

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => {
              props.navigation.toggleDrawer();
            }}>
            <Avatar.Image
              source={{
                uri: userInfo.thumbnail,
              }}
              size={50}
            />
          </TouchableOpacity>
          <Title style={styles.title}>{userInfo.name}</Title>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <IconButton icon="home-outline" color={color} size={size} />
            )}
            label="Inicio"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
        </Drawer.Section>
      </Animated.View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
  },
  caption: {
    fontSize: 14,
  },
  drawerSection: {
    marginTop: 15,
  },
});
