import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Route from './src/Route';
import React, { useEffect } from 'react';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen.js';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import UserAuthNavigation from './src/Navigation/UserAuthNavigation/UserAuthNavigation';


import { store } from './src/Redux/Store.js'
import { Provider } from "react-redux";

export default function App() {
  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 3000); //setting it to 3 seconds to display the splash screen for 3 seconds
    };
    hideSplashScreen();
  }, []);

  return (

    <SafeAreaView style={styles.container}>
    <Provider store={store}>

    <NavigationContainer>


      <UserAuthNavigation></UserAuthNavigation>
    </NavigationContainer>
    </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA'
  },
});
