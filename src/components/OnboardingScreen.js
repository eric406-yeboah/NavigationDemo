import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.onboardingContainer}>
      <Text style={styles.onboardingTitle}>Welcome to the App!</Text>
      <Text style={styles.onboardingText}>This is an onboarding screen.</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.replace('Main')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  onboardingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  onboardingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  onboardingText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default OnboardingScreen;
