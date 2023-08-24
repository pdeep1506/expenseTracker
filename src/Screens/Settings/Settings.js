import {  Text, View,Switch } from 'react-native'
import React from 'react'
import styles from './Style'

import { useSelector, useDispatch } from 'react-redux'
import { onDeleteSettingChange } from '../../Redux/settingsSlice'
import CustomButton from '../../components/CustomButton/CustomButton'
import { onUserLogout } from '../../Redux/userSlice'

const Settings = ({navigation, route,logoutNavigation}) => {
    
   
    const userStatus  = useSelector((state)=> state.userValue);
    // console.log("user status", userStatus);
    const dispatch = useDispatch();
   
    const onLogoutButtonPressed = ()=>{
      logoutNavigation.navigate("Login")
    }


    
    
  return (
    <View style={styles.container}>
       
        


          <CustomButton onPressFunc={onLogoutButtonPressed} buttonText='Logout'></CustomButton>
            
    </View>
  )
}




export default Settings

