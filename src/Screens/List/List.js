import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Modal, TextInput, Button, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeExpense, updateExpense, setExpense } from '../../Redux/settingsSlice';
import { deleteData, updateData, getData } from '../../db/dataManage';
import { FontAwesome, AntDesign } from '@expo/vector-icons'; 

import styles from './Style';
import CustomInput from '../../components/CustomInput/CustomInput';
const List = ({ navigation }) => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state)=>state.userValue.userEmail);
  useEffect(() => {
    const fetchExpenseData = async () => {

        getData(userEmail)
        .then((finalData)=>{
            // console.log(" final data ",finalData)
            dispatch(setExpense(finalData));
        })
        .catch((errr)=>{
            console.log("errr  " + errr);
        })
    };

    fetchExpenseData();
}, []);

  const [selectedExpense, setSelectedExpense] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const myTotalExpense = useSelector((state) => state.settingsValue.totalExpense);

  const handleExpenseClick = (expense) => {
    setSelectedExpense(expense);
    setModalVisible(true);
  };

  const handleUpdateExpense = async () => {
    
    updateData(selectedExpense.id, {
      title: selectedExpense.title,
      description: selectedExpense.description,
      category: selectedExpense.category,
      amount: selectedExpense.amount,
      date: selectedExpense.date,
    })
      .then((result) => {
        if (result == true) {


          dispatch(updateExpense({
            uid: selectedExpense.uid,
            updatedData: {
              title: selectedExpense.title,
              description: selectedExpense.description,
              category: selectedExpense.category,
              amount: selectedExpense.amount,
              date: selectedExpense.date,
            },

          }));
          setModalVisible(false);

        }

      })
      .catch((err) => {
        console.log(err);
      })



  };

  const handleDeleteExpense = async () => {
    try {
      if (selectedExpense) {
        await deleteData(selectedExpense.id);
        dispatch(removeExpense({ uid: selectedExpense.uid }));
        setModalVisible(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Expense List</Text>
        {myTotalExpense.map((expense) => (
          <TouchableOpacity key={expense.uid} style={styles.expenseItem} onPress={() => handleExpenseClick(expense)}>
            <Text style={styles.expenseTitle}>Title: {expense.title}</Text>
            <Text style={styles.expenseTitle}>Description: {expense.description}</Text>
            <Text style={styles.expenseCategory}>Category: {expense.category}</Text>
            <Text style={styles.expenseAmount}>Amount: ${expense.amount}</Text>
            <Text style={styles.expenseAmount}>Date: {expense.date}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide" transparent={true}
        onRequestClose={() => setModalVisible(false)
        }
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <View style={styles.headelModel}>

            <Text style={styles.modalTitle}>Edit Expense</Text>
            <FontAwesome name="close" size={24} onPress={()=>setModalVisible(false)} color="black" />
          </View>
            {selectedExpense && (
              <View>
                <Text style={styles.modalLabel}>Title</Text>
                <CustomInput
                 
                  placeholder="Title"
                  value={selectedExpense.title}
                  onChangeText={(text) => setSelectedExpense({ ...selectedExpense, title: text })}
                />
                <Text style={styles.modalLabel}>Description</Text>
                <CustomInput
              
                  placeholder="Description"
                  value={selectedExpense.description}
                  onChangeText={(text) => setSelectedExpense({ ...selectedExpense, description: text })}
                />
                <Text style={styles.modalLabel}>Category</Text>
                <Text style={styles.default}>{selectedExpense.category}</Text>
               
                <Text style={styles.modalLabel}>Amount</Text>
                <CustomInput
                
                  placeholder="Amount"
                  keyboardType="number-pad"
                  value={selectedExpense.amount}
                  onChangeText={(text) => setSelectedExpense({ ...selectedExpense, amount: text })}
                />
                <Text style={styles.modalLabel}>Date</Text>
                <Text style={styles.default}>{selectedExpense.date}</Text>
                
                <View style={styles.modalButtons}>
                 
                  <Button title="Update" onPress={handleUpdateExpense} />
                
                  <Button title="Delete" onPress={handleDeleteExpense} />
                </View>
              </View>
            )}
          </View>


        </View>
      </Modal>
    </ScrollView>
  );
};

export default List;
