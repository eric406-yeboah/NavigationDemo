import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icons
import OnboardingScreen from '../components/OnboardingScreen';
import HomeScreen from '../components/HomeScreen';
import SettingsScreen from '../components/SettingScreen';

// Tab Navigator
const Tab = createBottomTabNavigator();

// Main Tab Navigator
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline'; // Icon for Home
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline'; // Icon for Settings
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato', // Active tab color
        tabBarInactiveTintColor: 'gray', // Inactive tab color
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// Stack Navigator
const Stack = createStackNavigator();

// App Navigator
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }} // Hide header for onboarding
      />
      <Stack.Screen
        name="Main"
        component={MyTabs}
        options={{ headerShown: false }} // Hide header for tab navigator
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
