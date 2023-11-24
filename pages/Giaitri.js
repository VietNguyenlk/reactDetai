import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';


export default function Giaitri(){
    return(
        <View style={{backgroundColor:'black',flex:1}}>
            <Text style={{color:'aqua',fontSize:20,marginLeft:10,marginBottom:20}}>Phim</Text>
            <ScrollView style={{height:100}}>
            <View style={{marginBottom:7,borderTopWidth:2,borderColor:'grey',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{color:'white',fontSize:20,marginLeft:7}}>Phim bộ</Text>
                <Text style={{color:'aqua',fontSize:15,marginRight:10,marginTop:5}}>Cày thêm phim</Text>
            </View>
            <Image style={{height:200,width:380}} source={require('../assets/phim1.jpg')}/>
            <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Bảo Bối Thần Kỳ</Text>
            <View style={{display:'flex',flexDirection:'row',marginBottom:10}}>
                <Image style={{width:20,height:20,color:'white'}} source={require('../assets/iconphim.svg')}/>
                <Text style={{color:'white',fontSize:15,marginRight:10}}>30 tập</Text>
                <Image style={{width:20,height:20,color:'white'}} source={require('../assets/iconplay.svg')}/>
                <Text style={{color:'white',fontSize:15,marginRight:10}}>5289</Text>
            </View>
            <Image style={{height:200,width:380}} source={require('../assets/phim2.jpg')}/>
            <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Kiều Nữ Về Làng</Text>
            <View style={{display:'flex',flexDirection:'row',marginBottom:10}}>
                <Image style={{width:20,height:20,color:'white'}} source={require('../assets/iconphim.svg')}/>
                <Text style={{color:'white',fontSize:15,marginRight:10}}>20 tập</Text>
                <Image style={{width:20,height:20,color:'white'}} source={require('../assets/iconplay.svg')}/>
                <Text style={{color:'white',fontSize:15,marginRight:10}}>9366</Text>
            </View>
            <View style={{marginBottom:7,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{color:'white',fontSize:20,marginLeft:7}}>Review</Text>
                <Text style={{color:'aqua',fontSize:15,marginRight:10,marginTop:5}}>Cày thêm phim</Text>
            </View>
            <Image style={{height:200,width:380}} source={require('../assets/phim3.jpg')}/>
            <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Sự trỗi dậy của hành tinh khỉ</Text>
            <View style={{display:'flex',flexDirection:'row',marginBottom:10}}>
                <Image style={{width:20,height:20,color:'white'}} source={require('../assets/iconphim.svg')}/>
                <Text style={{color:'white',fontSize:15,marginRight:10}}>5 phút</Text>
                <Image style={{width:20,height:20,color:'white'}} source={require('../assets/iconplay.svg')}/>
                <Text style={{color:'white',fontSize:15,marginRight:10}}>3656</Text>
            </View>

            </ScrollView>
        </View>
    )
}