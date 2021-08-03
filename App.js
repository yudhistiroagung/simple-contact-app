import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ContactList } from './components/ContactList';
import { AddUpdateContact } from './components/AddUpdateContact';

const Stack = createStackNavigator();

const renderNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="ContactList">
      <Stack.Screen
        name="ContactList"
        component={ContactList}
        options={{ headerShown:false }}
      />
      <Stack.Screen
        name="AddUpdateContact"
        component={AddUpdateContact}
        options={{ headerShown:false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        {renderNavigation()}
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
