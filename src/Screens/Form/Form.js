import { Text, View,TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import styles from './Style';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from '../../components/CustomButton/CustomButton';
import { expenseCategory } from '../../Constants/Category/Category';
import CustomDatePicker from '../../components/DatePicker/CustomDatePicker';
import { dateConvertor } from '../../Utility/DateConvertor';
import { useSelector, useDispatch } from 'react-redux';
import CustomInput from '../../components/CustomInput/CustomInput';
import { addData } from '../../db/dataManage';

import { addExpense } from '../../Redux/settingsSlice';
import uuid from 'react-native-uuid';

const Form = ({ navigation, route }) => {
  const disptach = useDispatch();
 
  const [open, setOpen] = useState(false);
  const [userTitle, setuserTitle] = useState('');
  const [userDescription, setuserDescription] = useState('');
  const [userAmount, setuserAmount] = useState('');
  const [userCategory, setuserCategory] = useState('');
  const [userDate, setuserDate] = useState('');
  const userStatus = useSelector((state) => state.userValue);

  const onDateChange = (date) => {
    setuserDate(dateConvertor(date));
  };

  const onSubmitButtonPressed = () => {
    const userData = {
     uid: uuid.v4(),
      title: userTitle,
      description: userDescription,
      amount: userAmount,
      category: userCategory,
      date: userDate,
      email: userStatus.userEmail,
    };
  
    addData(userData)
    .then((output)=>{
  
        
      const id = output;
      if(id){
        // console.log(id + " save ")
        userData.id = id;
        disptach(addExpense(userData))
        navigation.navigate("List");
          setuserAmount('')
          setuserTitle('')
          setuserDescription('')
          setuserCategory('')
          setuserDate('')
        }
        else{
          console.log("error while saving data")
        }
      
    })
    .catch((Error)=>{
      console.log(Error)
    })

    
  };

  return (
    <View style={styles.container}>
    {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}></TouchableWithoutFeedback> */}
      <Text style={styles.title}>Add New Expense</Text>
      <View style={styles.input}>
        <Text style={styles.inputLabel}>Title:</Text>
        <CustomInput
          placeholder="Enter your title"
          onChangeText={(text) => setuserTitle(text)}
          value={userTitle}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.inputLabel}>Description:</Text>
        <CustomInput
          placeholder="Enter your Description"
          onChangeText={(text) => setuserDescription(text)}
          value={userDescription}
        />
      </View>

  
 
     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
      <View style={styles.input}>
        <Text style={styles.inputLabel}>Amount:</Text>
        <CustomInput
          placeholder="Enter your Amount"
          onChangeText={(text) => setuserAmount(text)}
          value={userAmount}
          keyboardType="number-pad"
        />
      </View>
      </TouchableWithoutFeedback>
      <View style={styles.input}>
        <Text style={styles.inputLabel}>Date:</Text>
        <CustomDatePicker onDateChange={onDateChange} />
      </View>

      <View style={styles.input}>
        <Text style={styles.inputLabel}>Category:</Text>
        <DropDownPicker
          open={open}
          value={userCategory}
          items={expenseCategory}
          setOpen={setOpen}
          setValue={setuserCategory}
          style={{ width: '70%' }}
        />
      </View>


      <CustomButton onPressFunc={()=>{onSubmitButtonPressed()}} buttonText="Add Expense" />
    </View>
  );
};

export default Form;
