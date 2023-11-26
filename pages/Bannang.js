import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';


export default function Bannang(){
    return(
        <View>

        <View style ={{flexDirection :'row'}} >
        <Image source={require('../assets/sach.jpg')}  style={{width:150,height:150}}  />
        <Text style={{fontSize:18,marginLeft:15,fontWeight:'bold'}}>Bản năng trong </Text>
        <Text style={{marginTop:30,marginLeft:-120}}>10.3k lượt nghe</Text>
        <Pressable style={{justifyContent:'center',alignItems:'center',width:100,borderRadius:20,marginTop:70,marginLeft:-100,backgroundColor:'#3399FF',height:30}}>Phát tất cả</Pressable>
        <Pressable style={{justifyContent:'center',alignItems:'center',width:100,borderRadius:20,marginTop:70,marginLeft:20,backgroundColor:'#CCCCCC',height:30}}>Nghe Thử</Pressable>
        </View>

        <Text style={{fontSize: 20}}>Lời tựa</Text>
        <Text style={{fontSize: 20}}>

        “Bản năng” kể lại câu chuyện cảm động của một phụ nữ với đứa bé mà cô đã bắt cóc và cuộc sống 
        cũng như cảm xúc của đứa trẻ sau khi đoàn tụ với gia đình mình vào năm bốn tuổi. 
        Câu chuyện bắt đầu vào năm 1985. Kiwako Nonomiya suy sụp vì người tình,
         một người đàn ông đã có vợ, thuyết phục cô phá thai, 
        sau đó lảng tránh và bội bạc lời hứa hẹn sẽ ly hôn với vợ.
        </Text>
    </View>
    )
}