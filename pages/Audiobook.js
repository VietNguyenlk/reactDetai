import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';


const DATA = [

    {id:1, img:require('../assets/sach.jpg'), name:'Cây bút thần kì', screenName: 'Caybutthanky'},
    {id:2, img:require('../assets/sach.jpg'),name:'Bản năng', screenName: 'Bannang'},
    {id:3, img:require('../assets/sach.jpg'),name:'Căn phòng khóa', screenName: 'Canphongkhoa'},
    {id:4, img:require('../assets/sach.jpg'),name:'Không nơi nương tựa', screenName: 'Khongnoinuongtua'},
    {id:5, img:require('../assets/sach.jpg'),name:'Con nhà nghèo', screenName: 'Connhangheo'},
]

const Item = ({img,title,navigation,screenName}) => (
    <TouchableOpacity onPress={()=>    navigation.navigate(screenName)
    
    
    
    } style={styles.container}>
       
      <Image source={img} style={styles.imgage} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
    
     
    
    </TouchableOpacity>
  );

export default function Audiobook({navigation}){
    return(
        <SafeAreaView style={styles.container} >
        <FlatList
         data={DATA}
         renderItem={({item}) => <Item img={item.img}  title={item.name}  navigation={navigation} screenName={item.screenName} /> }
         keyExtractor={item=> item.id}
        
        
        
        />
       
      
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems :'center',
      flexDirection:'row',
      
     
    },
    imgage:{
        width: 150,
        height: 150,
        alignItems :'center',
        justifyContent:'center',
        marginTop :15,
        borderRadius : 20,
      
        

    },
    title:{
        fontSize : 22,
        fontWeight : 'bold',
        marginTop : 30,
        marginLeft : 20

    }
});