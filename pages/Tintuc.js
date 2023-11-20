import { useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native';


const DATA = [

  {id:1,img:require('../assets/1.jpg'),title:'Mỗi Sinh Viên cần xem danh hiệu Sinh viên 5 tốt là động lực, mục tiêu phấn đấu'},
  
  
  {id:2,img: require('../assets/2.jpg'),title: 'Hội sinh viên thành phố hà Nội cần phải sẵn sàng lãnh trách nhiệm đầu tàu'},
  {id:3,img: require('../assets/3.jpg'), title:'Khánh Hòa- Trao danh hiệu sinh viên tốt'
  },
  {id:4,img: require('../assets/4.jpg'),title:'Vai trò của kỹ năng mềm quyết định 75% sự thành đạt'}
];

const Item = ({img,title}) => (
  <View style={styles.container}>
    <Image source={img} style={styles.imgage} resizeMode="cover" />
    <Text style={styles.title}>{title}</Text>
   
  </View>
);

export default function FirstPage(){
   
    return(
        <SafeAreaView style={styles.container} >
            <FlatList
             data={DATA}
             renderItem={({item}) => <Item img={item.img}  title={item.title}/> }
             keyExtractor={item=> item.id}
            
            
            
            />
           
          
        </SafeAreaView>
    )
  
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
      alignItems :'center',
      
     
    },
    imgage:{
        width: '90%',
        height: 200,
        alignItems :'center',
        justifyContent:'center',
        marginTop :15,
        

    }
});

