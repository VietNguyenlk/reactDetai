import { useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';

const Tab = createMaterialTopTabNavigator();
import FirstPage from '../pages/Tintuc';
import SecondPage from '../pages/Hoctap';
import Giaitri from '../pages/Giaitri';
import Audiobook from '../pages/Audiobook';
import Thuvien from '../pages/Thuvien';

export default function Danhba(){
   
    return(
        <View style={styles.container}>
            <View style={{backgroundColor:'blue',height:60,display:'flex',flexDirection:'row'}}>
                <Image style={{width:30,height:30,marginTop:13,marginLeft:10}} source={require('../assets/acc.png')}/>
                <Text style={{fontSize:20,color:'white',marginTop:13,marginLeft:10}}>Trương Tuấn Kiệt</Text>
                <Image style={{width:30,height:30,marginTop:13,marginLeft:100}} source={require('../assets/kinh.png')}/>
                <Image style={{width:30,height:30,marginTop:13,marginLeft:10}} source={require('../assets/chuong.png')}/>
            </View>
            <View style={{paddingTop:18, height:50,width:'100%',display:'flex',flexDirection:"row",justifyContent:"space-around",backgroundColor:'white'}}>
                <TouchableOpacity>
                    <Text style={{color:'gray'}}>Tin tức</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{color:'gray'}}>Học tập</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{color:'gray'}}>Giải trí</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{color:'gray'}}>Đại hội</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{color:'gray'}}>Thư viện</Text>
                </TouchableOpacity>
            </View>
            <View style={{height:50,display:'flex',flexDirection:"row",backgroundColor:'white',paddingTop:10,marginTop:5}}>
                <Image style={{marginLeft:10,width:30,height:30}} source={require('../assets/channguoi.png')}/>
                <Text style={{color:'blue',marginLeft:20,marginTop:5}}>Danh sách chặn</Text>
            </View>
            <ScrollView style={{height:100}}>
                <Text style={{fontSize:25,marginLeft:10}}>A</Text>
                <View style={{backgroundColor:'white',height:50,display:'flex',flexDirection:'row',padding:5}}>
                    <Image style={{width:42,height:40,}} source={require('../assets/tron.png')}/>
                    <View style={{marginLeft:25}}>
                        <Text style={{fontWeight:'bold'}}>Anh</Text>
                        <Text style={{fontStyle:'italic'}}>19/12/2023</Text>
                    </View>
                    <Image style={{marginLeft:160,marginRight:15,width:30,height:30,}} source={require('../assets/dienthoai.png')}/>
                    <Image style={{width:30,height:30,}} source={require('../assets/chat 1.png')}/>
                </View>
                <Text style={{fontSize:25,marginLeft:10}}>B</Text>
                <View style={{backgroundColor:'white',height:50,display:'flex',flexDirection:'row',padding:5}}>
                    <Image style={{width:42,height:40,}} source={require('../assets/tron.png')}/>
                    <View style={{marginLeft:25}}>
                        <Text style={{fontWeight:'bold'}}>Bình</Text>
                        <Text style={{fontStyle:'italic'}}>13/10/2022</Text>
                    </View>
                    <Image style={{marginLeft:160,marginRight:15,width:30,height:30,}} source={require('../assets/dienthoai.png')}/>
                    <Image style={{width:30,height:30,}} source={require('../assets/chat 1.png')}/>
                </View>
                <Text style={{fontSize:15,margin:10}}>Liên hệ chưa sử dụng Thanh Niên Việt Nam</Text>
                <View style={{backgroundColor:'white',height:50,display:'flex',flexDirection:'row',padding:5}}>
                    <Image style={{width:42,height:40,}} source={require('../assets/tron.png')}/>
                    <View style={{marginLeft:25,marginTop:10}}>
                        <Text style={{fontWeight:'bold'}}>Bình</Text>
                    </View>
                </View>
            </ScrollView>
            <Image style={{marginLeft:"80%",width:50,height:50}} source={require('../assets/logodanhba.png')}/>
            <View style={{padding:5, backgroundColor:'white',display:'flex',flexDirection:'row',justifyContent: 'space-between',marginTop:10}}> 
              <TouchableOpacity style={{marginLeft:10,alignItems:'center'}}>
                <Image style={{width:25,height:25,}} source={require('../assets/vector2.png')}/>
                <Text>Trang chủ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginRight:0,marginLeft:0,alignItems:'center'}}>
                <Image style={{width:25,height:25}} source={require('../assets/chat 1.png')}/>
                <Text>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginRight:0,marginLeft:0,alignItems:'center'}}>
                <Image style={{width:25,height:25}} source={require('../assets/dienthoai.png')}/>
                <Text>Cuộc gọi</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginRight:0,marginLeft:0,alignItems:'center'}}> 
                <Image style={{width:25,height:25}} source={require('../assets/nguoi2.png')}/>
                <Text>Danh bạ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginRight:10,alignItems:'center'}}>
                <Image style={{width:25,height:25}} source={require('../assets/apps-alt 1.png')}/>
                <Text>Khác</Text>
              </TouchableOpacity>
              
          </View>
        </View>
    )
  
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
     // alignItems :'center',
     backgroundColor:'#ECECEC'
    },
    imgage:{
        width: '90%',
        height: 200,
        alignItems :'center',
        justifyContent:'center',
        marginTop :15,
        

    }
});

