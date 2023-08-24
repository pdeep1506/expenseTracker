import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E6E6FA'
    },
    image: {
      marginTop: 10,
      width: 200,
      height: 200,
    },
    inputContainer: {
      width: '80%',
      marginBottom: 12,
    },
    inputLabel: {
      fontSize: 16,
      fontWeight: '300',
      marginVertical: 8,
      fontWeight: 'bold'
    },
    input: {
      borderWidth: 1,
      borderColor: '#CCCCCC',
      borderRadius: 8,
      padding: 10,
      fontSize: 16,
    },
    registerButton: {
      backgroundColor: '#483D8B',
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 40,
      marginTop: 20,
    },
    registerButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
    },
  });
  

  export default styles;