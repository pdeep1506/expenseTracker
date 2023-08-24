import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

import { Entypo } from '@expo/vector-icons';
const CustomInput = ({ label,keyboardType, placeholder, value, onChangeText,password,secure }) => {
  return (
    <View style={[styles.inputContainer, {width:password? "64%": "70%"}]}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secure? true:false}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    
    width: '70%',
    alignSelf: 'center',
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 3,
  },
});

export default CustomInput;
