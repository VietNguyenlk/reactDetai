import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';


export default function Connhangheo(){
    return(
        <View >

            <View style ={{flexDirection :'row'}} >
            <Image source={require('../assets/sach.jpg')}  style={{width:150,height:150}}  />
            <Text style={{fontSize:18,marginLeft:15,width:200,fontWeight:'bold'}}>Con nhà nghèo</Text>
            <Text style={{marginTop:30,marginLeft:-180}}>10.3k lượt nghe</Text>
            <Pressable style={{justifyContent:'center',alignItems:'center',width:100,borderRadius:20,marginTop:70,marginLeft:-100,backgroundColor:'#3399FF',height:30}}>Phát tất cả</Pressable>
            <Pressable style={{justifyContent:'center',alignItems:'center',width:100,borderRadius:20,marginTop:70,marginLeft:20,backgroundColor:'#CCCCCC',height:30}}>Nghe Thử</Pressable>
            </View>

            <Text style={{fontSize:20}}>Lời tựa</Text>
            <Text style={{fontSize:20}}>Hồ Biểu Chánh là một nhà văn lớn của Nam Bộ, người có công mở đường cho nền tiểu thuyết Việt Nam hiện đại. Người đương thời và nhiều thế hệ về sau đã đón nhận tác phẩm Hồ Biểu Chánh với tất cả sự nồng nhiệt, trân trọng. Lịch sử văn học Việt Nam không thể phủ nhận đóng góp to lớn của Hồ Biểu Chánh. Một trong những yếu tố làm nên sự thành công ấy chính là tác phẩm của ông có được một hình thức ngôn ngữ đầy ấn tượng, thể hiện phong cách ngôn ngữ văn xuôi Nam bộ những năm cuối thế kỉ XIX đầu thế kỉ XX.</Text>
        </View>
    )
}