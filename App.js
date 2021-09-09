import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import {store} from './store'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
import { Platform } from 'react-native';


const Stack = createNativeStackNavigator()
export default function App() {


  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios'? "padding": "height"}
        style = {{flex:1}}
        keyboardVerticalOffset={Platform.OS ==='ios' ? 0 : 0}>
          <Stack.Navigator>
            <Stack.Screen
              name = 'HomeScreen'
              component = {HomeScreen}
              options = {{
                headerShown: false,
              }}
              />
            <Stack.Screen
              name = 'MapScreen'
              component = {MapScreen}
              options = {{
                headerShown: false,
              }}
              />

          </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
      </NavigationContainer>
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
