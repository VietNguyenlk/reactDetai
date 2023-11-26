import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';


export default function Canphongkhoa(){
    return(
        <View>

            <View style ={{flexDirection :'row'}} >
            <Image source={require('../assets/sach.jpg')}  style={{width:150,height:150}}  />
            <Text style={{fontSize:18,marginLeft:15,width:200,fontWeight:'bold'}}>Căn phòng khóa</Text>
            <Text style={{marginTop:30,marginLeft:-180}}>10.3k lượt nghe</Text>
            <Pressable style={{justifyContent:'center',alignItems:'center',width:100,borderRadius:20,marginTop:70,marginLeft:-100,backgroundColor:'#3399FF',height:30}}>Phát tất cả</Pressable>
            <Pressable style={{justifyContent:'center',alignItems:'center',width:100,borderRadius:20,marginTop:70,marginLeft:20,backgroundColor:'#CCCCCC',height:30}}>Nghe Thử</Pressable>
            </View>

            <Text style={{fontSize:20}}>Lời tựa</Text>
            <Text style={{fontSize:20}}>“Căn Phòng Khóa” là một cuốn tiểu thuyết lấy cảm hứng từ một câu chuyện có thật từng gây rúng động thế giới về một người đàn ông ở Áo đã từng bắt cóc, giam cầm và hãm hiếp chính con gái ruột của mình trong suốt 24 năm, khiến cô sinh 7 đứa con.</Text>
        </View>
    )
}