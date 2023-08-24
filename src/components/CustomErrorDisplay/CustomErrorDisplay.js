import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomErrorDisplay = ({errorText}) => {
  return (
    <View>
      <Text style={styles.errorText}>{errorText}</Text>
    </View>
  )
}

export default CustomErrorDisplay

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 3,
      },
})
