import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import { ContactList } from './components/ContactList';

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <ContactList />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
