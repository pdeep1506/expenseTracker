import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image } from 'react-native';
import logo from '../../../assets/login.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import styles from './Style';
import { registration_firebase } from '../../db/auth';
import { ValidateEmail } from '../../Utility/validateEmail';
import { Entypo } from '@expo/vector-icons';
import CustomErrorDisplay from '../../components/CustomErrorDisplay/CustomErrorDisplay';
import CustomButton from '../../components/CustomButton/CustomButton';
const Registration = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setshowPassword] = useState(true)
  const [Error, setError] = useState("")

  const passwordHandleFunction = ()=>{
    setshowPassword((prevState)=>{
      return !prevState
    })
  }
  const handleRegister = () => {
    
    if (!email || !password || !confirmPassword) {
      setError("Please fill out all required fields.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match. Please make sure they match.");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
    } else if (!ValidateEmail(email)) {
      setError("Please enter a valid email address.");
    }
    else {
      registration_firebase(email, password)
        .then((user) => {
          if (user) {
            navigation.navigate('Login');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleLogin = ()=>{
    navigation.navigate('Login'); 
  }
  

  return (
    <KeyboardAvoidingView behavior='padding' style={{flex:1}}>
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />

      <Text style={{fontSize:42, fontWeight:"bold" ,marginTop:10, marginBottom:40}}>create Account</Text>
      <CustomInput
        label="Email Address"
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        
        style={styles.inputContainer}
      />

<View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
      <CustomInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
     
        style={styles.inputContainer}
        password={true}
        secure={showPassword}
      />
       {
    !showPassword? <Entypo style={{marginTop:10, marginLeft:5}}  name="eye-with-line" size={20} color="blue" onPress={passwordHandleFunction}  />: <Entypo style={{marginTop:10, marginLeft:5}} name="eye" size={20} color="blue" onPress={passwordHandleFunction} />
   }
   </View>

<View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
      <CustomInput
        label="Confirm Password"
        placeholder="Enter your password again"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        
        style={styles.inputContainer}
        password={true}
        secure={showPassword}
      />
       {
    !showPassword?  <Entypo style={{marginTop:10, marginLeft:5}}  name="eye-with-line" size={20} color="blue" onPress={passwordHandleFunction}   />:<Entypo style={{marginTop:10, marginLeft:5}} name="eye" size={20} color="blue" onPress={passwordHandleFunction}/>
   }
   </View>
      {/* <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity> */}

      {Error &&  <CustomErrorDisplay errorText={Error}></CustomErrorDisplay>}
<CustomButton onPressFunc={handleRegister} buttonText="Register"></CustomButton>
      <Text style={{marginTop:40}}>
        Already have an account?
    
          <Text style={{color:"blue"}} onPress={handleLogin}> Login in</Text>
       
      </Text>
    </View>
    </KeyboardAvoidingView>
  );
};

export default Registration;
