import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Form from '../../Screens/Form/Form';
import List from '../../Screens/List/List';
import Details from '../../Screens/Details/Details';
import Settings from '../../Screens/Settings/Settings'; 
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();
const MainNavigation = ({navigation, route}) => {
  return (
    
        <Tab.Navigator>
    <Tab.Screen name="Form" options={{
        tabBarLabel:"Add Expense",headerShown:true,title:"",
        tabBarIcon:(props)=>(<AntDesign name="form" size={18} color={props.color} />)
      }}>

      {
        (props)=>{
          return(
              
              <Form navigation={props.navigation} route={props.route}></Form>
          )
        }
      }
    </Tab.Screen>
    <Tab.Screen name="List" options={{
        tabBarLabel:"All Expenses",headerShown:true,title:"",
        tabBarIcon:(props)=>(<FontAwesome name="list-ol" size={18} color={props.color} />)
      }}>

      {
        (props)=>{
          return(
              
              <List navigation={props.navigation} route={props.route}></List>
          )
        }
      }
    </Tab.Screen>
    {/* <Tab.Screen name="Details" options={{
        tabBarLabel:"Details",headerShown:true,title:"",
        tabBarIcon:(props)=>(<Ionicons name="information" size={18} color={props.color} />)
      }}>

      {
        (props)=>{
          return(
              
              <Details navigation={props.navigation} route={props.route}></Details>
          )
        }
      }
    </Tab.Screen> */}
    <Tab.Screen name="Settings" options={{
        tabBarLabel:"Settings",headerShown:true,title:"",
        tabBarIcon:(props)=>(<AntDesign name="setting" size={18} color={props.color}  />)
      }}>

      {
        (props)=>{
          return(
              
              <Settings navigation={props.navigation} logoutNavigation={navigation} route={props.route}></Settings>
          )
        }
      }
    </Tab.Screen>

    </Tab.Navigator>
    
  )
}

export default MainNavigation

const styles = StyleSheet.create({})