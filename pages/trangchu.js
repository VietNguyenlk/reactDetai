import { useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';

const Tab = createMaterialTopTabNavigator();
import FirstPage from '../pages/Tintuc';
import SecondPage from '../pages/Hoctap';
import Giaitri from '../pages/Giaitri';
import Audiobook from '../pages/Audiobook';
import Thuvien from '../pages/Thuvien';


export default function Trangchu({navigation}){
   
    return(
        <View style={styles.container}>
            <View style={{backgroundColor:'#0066FF',height:60,display:'flex',flexDirection:'row'}}>
                <Image style={{width:30,height:30,marginTop:13,marginLeft:10}} source={require('../assets/acc.png')}/>
                <Text style={{fontSize:20,color:'white',marginTop:13,marginLeft:10}}>Trương Tuấn Kiệt</Text>
                <Image style={{width:30,height:30,marginTop:13,marginLeft:100}} source={require('../assets/kinh.png')}/>
                <Image style={{width:30,height:30,marginTop:13,marginLeft:10}} source={require('../assets/chuong.png')}/>
            </View>
            <View style={{backgroundColor:'gray' , height:60,width:'100%',display:'flex',flexDirection:"row",justifyContent:"space-around",alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('first')}>
                    <Text style={{color:'white'}} >Tin tức</Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={()=>navigation.navigate('first')} >
                    <Text  style={{color:'white'}} >Học tập</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('first')}>
                    <Text style={{color:'white'}} >Giải trí</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('first')}>
                    <Text style={{color:'white'}} >Đại hội</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('first')}>
                    <Text style={{color:'white'}}  >Thư viện</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{height:100}}>
                <Image style={{width:"100%",height:200}} source={require('../assets/anh1.jpg')}/>
                <Text style={{fontWeight:'bold',marginTop:5,marginBottom:5}}>Liên hệ thường xuyên</Text>
                <View style={{display:'flex',flexDirection:"row",justifyContent:"space-around"}}>
                    <TouchableOpacity style={{alignItems:'center'}}>
                    <Image style={{width:42,height:40}} source={require('../assets/tron.png')}/>
                    <Text>Thêm bạn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}}>
                    <Image style={{width:42,height:40}} source={require('../assets/tron.png')}/>
                    <Text>Nguyễn A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}}>
                    <Image style={{width:42,height:40}} source={require('../assets/tron.png')}/>
                    <Text>Nguyễn B</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}}>
                    <Image style={{width:42,height:40}} source={require('../assets/tron.png')}/>
                    <Text>Nguyễn C</Text>
                    </TouchableOpacity>
                </View>
                <View style={{display:'flex',flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={{fontWeight:'bold',marginTop:10,marginBottom:5,marginLeft:10}}>Tin tức</Text>
                    <Text style={{color:'blue',marginTop:10,marginBottom:5,marginRight:10}}>Xem thêm</Text>
                </View>
                <Image style={{width:"100%",height:200}} source={require('../assets/hinhtrangchu2.png')}/>
            </ScrollView>
            <View style={{display:'flex',flexDirection:'row',justifyContent: 'space-evenly',marginTop:10}}> 
              <TouchableOpacity  style={{marginRight:25,alignItems:'center'}}>
                <Image style={{width:25,height:25,}} source={require('../assets/Vector.png')}/>
                <Text>Trang chủ</Text>
              </TouchableOpacity >
              <TouchableOpacity onPress={()=>navigation.navigate('Chat')} style={{marginRight:25,marginLeft:25,alignItems:'center'}}>
                <Image style={{width:25,height:25}} source={require('../assets/chat 1.png')}/>
                <Text>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Thanhtoan')} style={{marginRight:25,marginLeft:25,alignItems:'center'}}> 
                <Image style={{width:25,height:25}} source={require('../assets/credit-card 1.png')}/>
                <Text>Thanh toán</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Khac')} style={{marginLeft:25,alignItems:'center'}}>
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

