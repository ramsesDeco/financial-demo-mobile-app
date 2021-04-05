import {useQuery} from '@apollo/client';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Caption,
  Switch,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import {GET_THEME_MODE, removeThemeMode, toggleThemeMode} from '../../../store';

export const ToggleSwitchTheme = () => {
  const {data} = useQuery(GET_THEME_MODE, {
    fetchPolicy: 'cache-only',
  });
  const {dark} = useTheme();

  return (
    <>
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
      {data && (
        <TouchableRipple
          onPress={() => {
            removeThemeMode();
          }}>
          <View style={styles.preference}>
            <Caption>Usar el tema del dispositivo</Caption>
          </View>
        </TouchableRipple>
      )}
    </>
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
