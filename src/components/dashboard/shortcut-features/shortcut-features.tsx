import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';

export const ShortcutFeatures = () => {
  return (
    <View style={styles.shortcutFeaturesContainer}>
      <View style={[styles.overflowBar, styles.topBar]} />
      <View style={[styles.overflowBar, styles.bottomBar]} />
      <View style={styles.feature}>
        <IconButton
          color={styles.white.color}
          icon="star"
          onPress={() => {
            // TODO: add funcionality
          }}
        />
        <Text style={styles.white}>Crear Logro</Text>
      </View>
      <View style={styles.feature}>
        <IconButton
          color={styles.white.color}
          icon="tag"
          onPress={() => {
            // TODO: add funcionality
          }}
        />
        <Text style={styles.white}>Pagar servicio</Text>
      </View>
      <View style={styles.feature}>
        <IconButton
          color={styles.white.color}
          icon="bell"
          onPress={() => {
            // TODO: add funcionality
          }}
        />
        <Text style={styles.white}>Subscripción</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shortcutFeaturesContainer: {
    position: 'relative',
    backgroundColor: '#773183',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  feature: {
    alignItems: 'center',
    padding: 20,
  },
  overflowBar: {
    position: 'absolute',
    height: 20,
    left: 0,
    right: 0,
    zIndex: 0,
    backgroundColor: '#773183',
  },
  topBar: {
    top: -20,
  },
  bottomBar: {
    bottom: -20,
  },
  white: {
    color: '#fff',
  },
});
