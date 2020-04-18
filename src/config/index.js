import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import DeckListScreen from "../screens/DeckListScreen";
import DeckDetailsScreen from "../screens/DeckDetailsScreen";
import AddDeckScreen from "../screens/AddDeckScreen";
import ReviewScreen from "../screens/ReviewScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AddCardScreen from "../screens/AddCardScreen";

const Tabs = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tabs.Navigator
    initialRouteName='DeckList'
    activeColor='#e38271'
    barStyle={{ backgroundColor: "#42b9d7" }}
  >
    <Tabs.Screen
      name='DeckList'
      component={DeckListScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name='home' color={color} size={24} />
        ),
      }}
    />
    <Tabs.Screen
      name='AddDeck'
      component={AddDeckScreen}
      options={{
        tabBarLabel: "New Deck",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name='cards' color={color} size={24} />
        ),
      }}
    />
    <Tabs.Screen
      name='Settings'
      component={SettingsScreen}
      options={{
        tabBarLabel: "Settings",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name='settings-box' color={color} size={24} />
        ),
      }}
    />
  </Tabs.Navigator>
);

const StackNavigator = () => (
  <Stack.Navigator initialRouteName='Home' headerMode='none'>
    <Stack.Screen name='Home' component={TabNavigator} />
    <Stack.Screen name='Deck' component={DeckDetailsScreen} />
    <Stack.Screen name='Review' component={ReviewScreen} />
    <Stack.Screen name='AddCard' component={AddCardScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default AppNavigator;
