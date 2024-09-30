import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.centeredContainer}>
      <Text>Settings!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
