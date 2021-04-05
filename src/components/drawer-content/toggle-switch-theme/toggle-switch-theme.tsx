import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Switch, Text, TouchableRipple, useTheme} from 'react-native-paper';
import {toggleThemeMode} from '../../../store';

export const ToggleSwitchTheme = () => {
  const {dark} = useTheme();

  return (
    <TouchableRipple
      onPress={() => {
        toggleThemeMode();
      }}>
      <View style={styles.preference}>
        <Text>Tema oscuro</Text>
        <View pointerEvents="none">
          <Switch value={dark} />
        </View>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
