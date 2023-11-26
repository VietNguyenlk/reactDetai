import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';


export default function Khongnoinuongtua(){
    return(
        <View>

            <View style ={{flexDirection :'row'}} >
            <Image source={require('../assets/sach.jpg')}  style={{width:150,height:150}}  />
            <Text style={{fontSize:18,marginLeft:15,width:200,fontWeight:'bold'}}>Không nơi nương tựa</Text>
            <Text style={{marginTop:30,marginLeft:-180}}>10.3k lượt nghe</Text>
            <Pressable style={{justifyContent:'center',alignItems:'center',width:100,borderRadius:20,marginTop:70,marginLeft:-100,backgroundColor:'#3399FF',height:30}}>Phát tất cả</Pressable>
            <Pressable style={{justifyContent:'center',alignItems:'center',width:100,borderRadius:20,marginTop:70,marginLeft:20,backgroundColor:'#CCCCCC',height:30}}>Nghe Thử</Pressable>
            </View>

            <Text style={{fontSize:20}}>Lời tựa</Text>
            <Text style={{fontSize:20}}>Không nơi nương tựa” là câu chuyện thật của chính tác giả, kể về thời thơ ấu bị vùi dập đau thương của mình - một trong những trường hợp hắt hủi và bạo hành trẻ em nghiêm trọng nhất lịch sử bang California, Hoa Kỳ.</Text>
        </View>
    )
}