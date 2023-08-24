import { Text, View, Image, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import styles from './Style';
import logo from '../../../assets/login.png'
import { login_firebase } from '../../db/auth';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useSelector, useDispatch } from 'react-redux'
import { onUserLogin } from '../../Redux/userSlice';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomErrorDisplay from '../../components/CustomErrorDisplay/CustomErrorDisplay'
import { Entypo } from '@expo/vector-icons';
{/* <Entypo name="eye-with-line" size={24} color="black" /> */}
{/* <Entypo name="eye" size={24} color="black" /> */}
const LoginScreen = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState("")
const [showPassword, setshowPassword] = useState(true)

const passwordHandleFunction = ()=>{
  setshowPassword((prevState)=>{
    return !prevState
  })
}
  const handleLogin = async () => {
    if (!email && !password) {
      seterror("Please provide your email address and password.");
    } else if (!password) {
      seterror("Please enter your password.");
    } else if (!email) {
      seterror("Please enter your email address.");
    } else if (!isEmailValid()) {
      seterror("The email address you entered is not valid.");
    } else if (!isPasswordValid()) {
      seterror("The password you entered is not valid.");
    }
    

    else{

    
    login_firebase(email, password)
      .then((userDetails) => {
        if (userDetails.success) {
          dispatch(onUserLogin({ userIsLogin: true, uid: userDetails.uid, userEmail: userDetails.email }))
          navigation.navigate('Main')
          setEmail("");
          setPassword("")
          seterror("")
        }
      })
      .catch((error) => {
        console.log(error)
        if(error.errorCode === "auth/wrong-password"){
          seterror("Incorrect password. Please try again.")
        }
      })

    }

  };

  const handleRegister = () => {
    navigation.navigate('Register')
  }

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = () => {
    return password.length >= 6;
  };

  return (
    <KeyboardAvoidingView behavior='padding' style={[{flex:1}]}>

   
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Text style={{fontSize:42, fontWeight:"bold" ,marginTop:10, marginBottom:40}}>Log in</Text>
      <CustomInput
        label="Email Address"
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        password={false}
        style={styles.inputContainer}
      />


<View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>

      <CustomInput 
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        password={true}
        secure={showPassword}
        style={styles.inputContainer}
      />
   {
    !showPassword? <Entypo style={{marginTop:10, marginLeft:5}}  name="eye-with-line" size={20} color="blue" onPress={passwordHandleFunction}  />: <Entypo style={{marginTop:10, marginLeft:5}} name="eye" size={20} color="blue" onPress={passwordHandleFunction} />
   }

</View>



    {error &&  <CustomErrorDisplay errorText={error}></CustomErrorDisplay>}
    
      {/* <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity> */}

      

      
      <CustomButton buttonText="Login" onPressFunc={handleLogin}></CustomButton>
    

      <Text style={styles.registerText}>
        Don't Have account?
    
          <Text style={{color:"blue"}} onPress={handleRegister}> Sign up</Text>
       
      </Text>
    </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
