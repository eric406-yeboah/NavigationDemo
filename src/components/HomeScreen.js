import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.centeredContainer}>
      <Text></Text>
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

export default HomeScreen;
