import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';


export default function SecondPage(){
    return(
        <View style={styles.container}>
            <Pressable style={styles.btn}>BẢNG XẾP HẠNG</Pressable>
            <Pressable style={styles.btn}>THI TRỰC TUYẾN</Pressable>
            <Pressable style={styles.btn}>OLYMPIC TIẾNG ANH</Pressable>
            <Pressable style={styles.btn}>BIÊN CƯƠNG TỔ QUỐC TÔI</Pressable>
            <Pressable style={styles.btn}>TỰ HÀO VIỆT NAM</Pressable>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
      alignItems :'center',
      
     
    },
    btn:{
        width: "80%",
        height:50,
        borderWidth:1,
        borderRadius : 20,
        justifyContent : 'center',
        alignItems :'center',
        marginTop:20,
        fontWeight :'bold'
    }
})
