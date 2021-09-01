import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import {store} from './store'

import HomeScreen from './screens/HomeScreen'


export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
    <HomeScreen/>
    </SafeAreaProvider>
    </Provider>
  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingTop: '200',
  }
});
