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

export default function Call({navigation}){
   
    return(
        <View style={styles.container}>
            <View style={{backgroundColor:'#0066FF',height:60,display:'flex',flexDirection:'row'}}>
                <Image style={{width:30,height:30,marginTop:13,marginLeft:10}} source={require('../assets/acc.png')}/>
                <Text style={{fontSize:20,color:'white',marginTop:13,marginLeft:10}}>Trương Tuấn Kiệt</Text>
                <Image style={{width:30,height:30,marginTop:13,marginLeft:100}} source={require('../assets/kinh.png')}/>
                <Image style={{width:30,height:30,marginTop:13,marginLeft:10}} source={require('../assets/chuong.png')}/>
            </View>
            <View style={{alignItems:'center',backgroundColor:'gray', height:60,width:'100%',display:'flex',flexDirection:"row",justifyContent:"space-around"}}>
                <TouchableOpacity onPress={()=>navigation.navigate('first')}>
                    <Text style={{color:'white'}}>Tin tức</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('first')} >
                    <Text style={{color:'white'}}>Học tập</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('first')}>
                    <Text style={{color:'white'}}>Giải trí</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('first')}>
                    <Text style={{color:'white'}}>Đại hội</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('first')}>
                    <Text style={{color:'white'}}>Thư viện</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{height:100}}>
                <Image style={{marginLeft:140,width:"30%",height:200}} source={require('../assets/nendienthoai.png')}/>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontWeight:'normal',marginTop:5,marginBottom:5}}>Có rất nhiều bạn bè chờ đợi bạn trên ứng<br/>dụng Thanh Niên Việt Nam. Hãy vào danh <br/>bạ chọn Đồng bộ danh bạ hoặc click + để <br/>thêm bạn</Text></View>
                
            </ScrollView>
            <Image style={{marginLeft:"80%",width:50,height:50}} source={require('../assets/logocall.png')}/>
            <View style={{display:'flex',flexDirection:'row',justifyContent: 'space-between',marginTop:10}}> 
              <TouchableOpacity onPress={()=>navigation.navigate('Trangchu')} style={{marginLeft:10,alignItems:'center'}}>
                <Image style={{width:25,height:25,}} source={require('../assets/vector2.png')}/>
                <Text>Trang chủ</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Chat')} style={{marginRight:0,marginLeft:0,alignItems:'center'}}>
                <Image style={{width:25,height:25}} source={require('../assets/chat 1.png')}/>
                <Text>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={{marginRight:0,marginLeft:0,alignItems:'center'}}>
                <Image style={{width:25,height:25}} source={require('../assets/dienthoai2.png')}/>
                <Text>Cuộc gọi</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Danhba')} style={{marginRight:0,marginLeft:0,alignItems:'center'}}> 
                <Image style={{width:25,height:25}} source={require('../assets/nguoi.png')}/>
                <Text>Danh bạ</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Khac')} style={{marginRight:10,alignItems:'center'}}>
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
     
    },
    imgage:{
        width: '90%',
        height: 200,
        alignItems :'center',
        justifyContent:'center',
        marginTop :15,
        

    }
});

