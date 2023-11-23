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

export default function Khac(){
   
    return(
        <View style={styles.container}>
            <View style={{backgroundColor:'blue',height:60,display:'flex',flexDirection:'row'}}>
            <Image style={{width:25,height:25,margin:15}} source={require('../assets/muiten.png')}/>
            <Text style={{fontSize:30,color:'white',marginTop:5,marginLeft:100}}>Khác</Text>
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
            <View style={{height:50,backgroundColor:'white',paddingTop:10,marginTop:5}}>
                <View style={{display:'flex',flexDirection:"row",padding:5,justifyContent:'space-between'}}>
                    <Text>Cài đặt tính năng chat</Text>
                    <Image style={{width:15,height:15,marginRight:20}} source={require('../assets/muiten2.png')}/>
                </View>
            </View>
            <View style={{height:50,backgroundColor:'white',marginTop:5}}>
                <View style={{display:'flex',flexDirection:"row",padding:5,justifyContent:'space-between'}}>
                    <Text style={{marginTop:10}}>Nhận thông báo</Text>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <Text style={{marginTop:10}}>Bật</Text>
                        <Image style={{width:35,height:35,marginLeft:15,marginRight:20}} source={require('../assets/button.png')}/>
                    </View>
                </View>
            </View>
            <View style={{height:50,backgroundColor:'white',paddingTop:10,marginTop:5}}>
                <View style={{display:'flex',flexDirection:"row",padding:5,justifyContent:'space-between'}}>
                    <Text>Đổi mật khẩu</Text>
                    <Image style={{width:15,height:15,marginRight:20}} source={require('../assets/muiten2.png')}/>
                </View>
            </View>
            <View style={{height:50,backgroundColor:'white',paddingTop:10,marginTop:5}}>
                <View style={{display:'flex',flexDirection:"row",padding:5,justifyContent:'space-between'}}>
                    <Text>Điều khoản</Text>
                </View>
            </View>
            <View style={{height:50,backgroundColor:'white',paddingTop:10,marginTop:5}}>
                <View style={{display:'flex',flexDirection:"row",padding:5,justifyContent:'space-between'}}>
                    <Text>Xóa mật khẩu</Text>
                    <Image style={{width:15,height:15,marginRight:20}} source={require('../assets/muiten2.png')}/>
                </View>
            </View>
            <View style={{height:50,backgroundColor:'white',paddingTop:10,marginTop:5}}>
                <View style={{display:'flex',flexDirection:"row",padding:5,justifyContent:'space-between'}}>
                    <Text>Đăng xuất</Text>
                </View>
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

