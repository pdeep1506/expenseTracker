import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({onPressFunc, buttonText}) => {
  return (
    <TouchableOpacity style={styles.Button} onPress={onPressFunc}>
    <Text style={styles.ButtonText}>{buttonText}</Text>
  </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#483D8B',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 40,
        marginTop: 40,
      },
      ButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
      },
})