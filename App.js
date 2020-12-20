import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './navigation/tabs';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import BookDetails from './screens/BookDetails';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme,
    border:"transaparent"
  }
}
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="BookDetails" component={BookDetails} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

