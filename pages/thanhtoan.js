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

export default function ThanhToan({navigation}){
   
    return(
        <View style={styles.container}>
            <View style={{backgroundColor:'#0066FF',height:60,display:'flex',flexDirection:'row'}}>
                <Image style={{width:30,height:30,marginTop:13,marginLeft:10}} source={require('../assets/acc.png')}/>
                <Text style={{fontSize:20,color:'white',marginTop:13,marginLeft:10}}>Trương Tuấn Kiệt</Text>
                <Image style={{width:30,height:30,marginTop:13,marginLeft:100}} source={require('../assets/kinh.png')}/>
                <Image style={{width:30,height:30,marginTop:13,marginLeft:10}} source={require('../assets/chuong.png')}/>
            </View>
            <View style={{backgroundColor:'gray',alignItems:'center', height:60,width:'100%',display:'flex',flexDirection:"row",justifyContent:"space-around"}}>
                <TouchableOpacity onPress={()=>navigation.navigate('first')}>
                    <Text style={{color:'white'}}>Tin tức</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('first')}>
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
                <Text style={{marginLeft:20}}>Thanh Toán Dịch Vụ</Text><br/>
                <Text style={{marginLeft:20,color:'grey'}}>Thanh toán bằng tài khoản ngân hàng, thẻ ghi nợ quốc tế</Text><br/>
                <View style={{marginBottom:20,display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                    <TouchableOpacity style={{alignItems:'center',with:80}}>
                        <Image style={{height:50,width:50}} source={require('../assets/tt1.jpg')}/>
                        <Text>Nạp điện</Text>
                        <Text>thoại</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center',with:80}}>
                        <Image style={{height:50,width:50}} source={require('../assets/tt2.jpg')}/>
                        <Text>Gói cước</Text>
                        <Text>VinaPhone</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center',with:80}}>
                        <Image style={{height:50,width:50}} source={require('../assets/tt3.jpg')}/>
                        <Text>Mua mã thẻ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center',with:80}}>
                        <Image style={{height:50,width:50}} source={require('../assets/tt4.jpg')}/>
                        <Text>Tiền điện</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginBottom:20,display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                    <TouchableOpacity style={{alignItems:'center',with:80}}>
                        <Image style={{height:50,width:50}} source={require('../assets/tt5.jpg')}/>
                        <Text>Tiền nước</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center',with:80}}>
                        <Image style={{height:50,width:50}} source={require('../assets/tt6.jpg')}/>
                        <Text>Mua vé sự</Text>
                        <Text>kiện</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center',with:80,marginLeft:15}}>
                        <Image style={{height:50,width:50}} source={require('../assets/tt7.jpg')}/>
                        <Text>Điện thoại</Text>
                        <Text>cố định</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center',with:80,marginLeft:5}}>
                        <Image style={{height:50,width:50}} source={require('../assets/tt8.jpg')}/>
                        <Text>Tất cả dịch</Text>
                        <Text>vụ</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{marginLeft:20,fontWeight:'bold'}}>Tiện Ích Độc Quyền</Text><br/>
                <Text style={{marginLeft:20}}>Đăng nhập để sử dụng nguồn tiền ví và tận hưởng mọi tính<br/>năng độc quyền của VNPT Money</Text><br/>
                <Image style={{width:'100%',height:100}} source={require('../assets/tt9.jpg')}/>
                <View style={{alignItems:'center'}}>
                    <View style={{borderRadius:5,alignItems:'center',backgroundColor:'#4B8BF9',height:40,width:'80%'}}>
                        <TouchableOpacity >
                            <Text style={{margin:10}}>Đăng nhập/Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </ScrollView>
            <View style={{display:'flex',flexDirection:'row',justifyContent: 'space-evenly',marginTop:10}}> 
              <TouchableOpacity onPress={()=>navigation.navigate('Trangchu')} style={{marginRight:25,alignItems:'center'}}>
                <Image style={{width:25,height:25,}} source={require('../assets/Vector.png')}/>
                <Text>Trang chủ</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>navigation.navigate('Chat')}style={{marginRight:25,marginLeft:25,alignItems:'center'}}>
                <Image style={{width:25,height:25}} source={require('../assets/chat 1.png')}/>
                <Text>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={{marginRight:25,marginLeft:25,alignItems:'center'}}> 
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

