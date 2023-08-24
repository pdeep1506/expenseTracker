import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        marginHorizontal:3,
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    switchView:{
        flexDirection:"row",
       justifyContent:"space-between",
        marginVertical:10,
        
    },
    deleteText:{
        fontSize:18,
        alignSelf:"center"
    }
});
export default styles