import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from '../../Screens/LoginScreen/LoginScreen.js';
import Registration from '../../Screens/RegistrationScreen/Registration.js'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from '../MainNavigation/MainNavigation.js';

const Stack = createNativeStackNavigator();


const UserAuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login"  >
            {
                (props)=>{
                    return <LoginScreen navigation={props.navigation} route={navigator.route}></LoginScreen>
                }
            }
          </Stack.Screen>
          <Stack.Screen name="Register" >
            {
                (props)=>{
                    return <Registration navigation={props.navigation} route={navigator.route}></Registration>
                }
            }

          </Stack.Screen>
          <Stack.Screen name="Main" >
            {
                (props)=>{
                    return <MainNavigation navigation={props.navigation} route={navigator.route}></MainNavigation>
                }
            }
            
          </Stack.Screen>
        </Stack.Navigator>
      );
}

export default UserAuthNavigation

const styles = StyleSheet.create({})