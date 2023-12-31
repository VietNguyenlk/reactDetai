import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import first from './screens/first'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Caybutthanky  from './pages/Caybutthanky';
import Bannang from './pages/Bannang';
import Trangchu from './pages/trangchu';
import Tintuc from './pages/Tintuc';
import Chat from './pages/chat'
import Danhba  from './pages/danhba';
import Khac from './pages/khac';
import Call from './pages/call';
import Thanhtoan from './pages/thanhtoan';
import Canphongkhoa from './pages/Canphongkhoa';
import Khongnoinuongtua from './pages/Khongnoinuongtua';
import Connhangheo from './pages/Connhangheo';

const Stack = createNativeStackNavigator();
function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Vui lòng điền đầy đủ thông tin đăng nhập.');
    } else {
      navigation.navigate('first')
      // Thực hiện xác thực đăng nhập ở đây
      // Nếu xác thực thành công, bạn có thể điều hướng đến màn hình khác bằng `navigation.navigate`
      // Ví dụ: navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text 
            style={{color:'white',marginLeft:-200,marginTop:60,fontSize:16}}
            >Xin hãy nhập đầy đủ thông tin đăng nhập</Text>
        <View style={styles.form}>

        <TextInput
        style={styles.input}
        placeholder="Tên đăng nhập/Số điện thoại/Email"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <View style={{flexDirection:'row'}}> 
            <Text style={{marginLeft:10,fontWeight:'bold'}}>Lưu mật khẩu</Text>
            <Text style={{marginLeft:170,fontWeight:'bold'}}>Quên mật khẩu</Text>
      </View>
      
          <View style={{marginTop:30}} >

          <Button style={{borderRadius:10,width:'90%'}} title="Đăng nhập" onPress={handleLogin} />
         <Text style={styles.errorText}>{error}</Text>
          </View>



          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',fontSize:18,fontWeight:'bold',marginTop:150}}><Text >Bạn chưa có tài khoản?</Text> <Text style={{color:'blue',fontWeight:'bold'}}>ĐĂNG KÝ NGAY</Text></View>
        </View>




    </View>
  );
}




function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        {/* Các màn hình khác nếu cần */}
        <Stack.Screen options={{headerTitle:'NGUYỄN VĂN VIỆT', headerStyle : { backgroundColor :'#0066FF'},
          headerRight : ()=>{
            <FontAwesome5 name="search" size={24} color="white" style={{ marginRight: 10 }} />
            
          }
      
      }} name='first' component={first}/>

<Stack.Screen options={{headerTitle:'Con nhà nghèo',headerStyle:{backgroundColor:'#333333'},headerTitleStyle:{color:'#DDDDDD'}}} name='Connhangheo' component={Connhangheo} />   
<Stack.Screen options={{headerTitle:'Không nơi nương tựa',headerStyle:{backgroundColor:'#333333'},headerTitleStyle:{color:'#DDDDDD'}}} name='Khongnoinuongtua' component={Khongnoinuongtua} />
      <Stack.Screen options={{headerTitle:'Căn phòng khóa',headerStyle:{backgroundColor:'#333333'},headerTitleStyle:{color:'#DDDDDD'}}} name='Canphongkhoa' component={Canphongkhoa} />
      <Stack.Screen options={{headerTitle:'Cây bút thần kỳ',headerStyle:{backgroundColor:'#333333'},headerTitleStyle:{color:'#DDDDDD'}}} name='Caybutthanky' component={Caybutthanky} />
      <Stack.Screen options={{headerTitle:'Bản năng',headerStyle:{backgroundColor:'#333333'},headerTitleStyle:{color:'#DDDDDD'}}} name='Bannang' component={Bannang} />
      <Stack.Screen options={{headerTitle:'Trang Chủ',headerShown:false}} name='Trangchu' component={Trangchu} />
      <Stack.Screen options={{headerTitle:'Tintuc',headerShown:false}} name='Tintuc' component={Tintuc} />
      <Stack.Screen options={{headerTitle:'Chat',headerShown:false}} name='Chat' component={Chat} />
      <Stack.Screen options={{headerTitle:'Chat',headerShown:false}} name='Danhba' component={Danhba} />
      <Stack.Screen options={{headerTitle:'Chat',headerShown:false}} name='Call' component={Call} />
      <Stack.Screen options={{headerTitle:'Khác',headerShown:true,headerStyle:{backgroundColor:'#0066FF'}}} name='Khac' component={Khac} />
      <Stack.Screen options={{headerTitle:'Khác',headerShown:false}} name='Thanhtoan' component={Thanhtoan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems :'center',
    
    backgroundColor : '#0099FF'
  },
  title: {
    fontSize: 24,
    marginTop :40,
    marginLeft : -250,
    color : 'white',
    fontWeight:'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    height:50,
    padding: 10,
    marginBottom: 10,
    borderTopWidth: 0,
    
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  form:{
    marginTop: 30,
    width : '98%',
    backgroundColor :'white',
    height : '475px'
  }
});

export default App;

