import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Animated from 'react-native-reanimated';

export const DrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
) => {
  return (
    <DrawerContentScrollView {...props}>
      <Animated.View style={styles.drawerContent}>
        <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.toggleDrawer();
            }}>
            <Text>close menu</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
});
