import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';


export default function Thuvien(){
    return(
        <View style={{flex:1}}>
            <ScrollView style={{height:100}}>
                <View style={{height:120,margin:20,display:'flex',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'grey'}}>
                    <Image style={{width:100,height:100,marginRight:10}} source={require('../assets/tv1.jpg')}/>
                    <View>
                        <Text>I.GIỚI THIỆU CHUNG</Text><br/>
                        <Text>Đăng tải Điều lệ Đoàn, Huy hiệu Đoàn,<br/>mẫu áo Đoàn, Đoàn ca, Lịch sử Đoàn</Text><br/>
                        <Text style={{fontSize:12,color:'grey'}}>09:57 19/09/2022</Text>
                    </View>
                </View>
                <View style={{height:120,marginLeft:20,marginRight:20,display:'flex',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'grey'}}>
                    <Image style={{width:100,height:100,marginRight:10}} source={require('../assets/tv2.jpg')}/>
                    <View>
                        <Text>II. ĐẠI HỘI XII</Text><br/>
                        <br/><br/><br/>
                        <Text style={{fontSize:12,color:'grey'}}>13:27 20/08/2022</Text>
                    </View>
                </View>
                <View style={{height:120,marginLeft:20,marginRight:20,marginTop:20,display:'flex',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'grey'}}>
                    <Image style={{width:100,height:100,marginRight:10}} source={require('../assets/tv1.jpg')}/>
                    <View>
                        <Text>III. TUYÊN TRUYỀN, GIÁO DỤC</Text><br/>
                        <br/><br/><br/>
                        <Text style={{fontSize:12,color:'grey'}}>10:11 08/09/2022</Text>
                    </View>
                </View>
                <View style={{height:120,marginLeft:20,marginRight:20,marginTop:20,display:'flex',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'grey'}}>
                    <Image style={{width:100,height:100,marginRight:10}} source={require('../assets/tv1.jpg')}/>
                    <View>
                        <Text>IV. PHONG TRÀO THANH NIÊN</Text><br/>
                        <br/><br/><br/>
                        <Text style={{fontSize:12,color:'grey'}}>10:11 08/09/2022</Text>
                    </View>
                </View>
                <View style={{height:120,marginLeft:20,marginRight:20,marginTop:20,display:'flex',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'grey'}}>
                    <Image style={{width:100,height:100,marginRight:10}} source={require('../assets/tv1.jpg')}/>
                    <View>
                        <Text>V. ĐỒNG HÀNH VỚI THANH NIÊN</Text><br/>
                        <br/><br/><br/>
                        <Text style={{fontSize:12,color:'grey'}}>10:12 08/09/2022</Text>
                    </View>
                </View>
                <View style={{height:120,marginLeft:20,marginRight:20,marginTop:20,display:'flex',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'grey'}}>
                    <Image style={{width:100,height:100,marginRight:10}} source={require('../assets/tv1.jpg')}/>
                    <View>
                        <Text>VI. HỘI NHẬP QUỐC TẾ</Text><br/>
                        <br/><br/><br/>
                        <Text style={{fontSize:12,color:'grey'}}>10:12 08/09/2022</Text>
                    </View>
                </View>
                <View style={{height:120,marginLeft:20,marginRight:20,marginTop:20,display:'flex',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'grey'}}>
                    <Image style={{width:100,height:100,marginRight:10}} source={require('../assets/tv3.jpg')}/>
                    <View>
                        <Text>VII. XÂY DỰNG ĐOÀN</Text><br/>
                        <br/><br/><br/>
                        <Text style={{fontSize:12,color:'grey'}}>08:46 06/01/2022</Text>
                    </View>
                </View>
                <View style={{height:120,marginLeft:20,marginRight:20,marginTop:20,display:'flex',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'grey'}}>
                    <Image style={{width:100,height:100,marginRight:10}} source={require('../assets/tv4.jpg')}/>
                    <View>
                        <Text>VIII. HỘI LIÊN HIỆP THANH NIÊN VIỆT<br/> NAM</Text><br/>
                        <br/><br/>
                        <Text style={{fontSize:12,color:'grey'}}>10:10 08/09/2022</Text>
                    </View>
                </View>
                <View style={{height:120,marginLeft:20,marginRight:20,marginTop:20,display:'flex',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'grey'}}>
                    <Image style={{width:100,height:100,marginRight:10}} source={require('../assets/tv5.jpg')}/>
                    <View>
                        <Text>IX. HỘI SINH VIÊN VIỆT NAM</Text><br/>
                        <br/><br/><br/>
                        <Text style={{fontSize:12,color:'grey'}}>10:10 08/09/2022</Text>
                    </View>
                </View>
                <View style={{height:120,marginLeft:20,marginRight:20,marginTop:20,display:'flex',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'grey'}}>
                    <Image style={{width:100,height:100,marginRight:10}} source={require('../assets/tv6.jpg')}/>
                    <View>
                        <Text>X. HỘI THIẾU NIÊN TIỀN PHONG HỒ<br/>CHÍ MINH</Text><br/>
                        <br/><br/>
                        <Text style={{fontSize:12,color:'grey'}}>10:10 08/09/2022</Text>
                    </View>
                </View>
                <View style={{height:120,marginLeft:20,marginRight:20,marginTop:20,display:'flex',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'grey'}}>
                    <Image style={{width:100,height:100,marginRight:10}} source={require('../assets/tv1.jpg')}/>
                    <View>
                        <Text>XI. KHO TÀI NGUYÊN</Text><br/>
                        <Text>Đăng tải Điều lệ Đoàn, Huy hiệu Đoàn,<br/>mẫu áo Đoàn, Đoàn ca, Lịch sử Đoàn</Text><br/>
                        <Text style={{fontSize:12,color:'grey'}}>10:10 08/09/2022</Text>
                    </View>
                </View>
                <View style={{height:120,marginLeft:20,marginRight:20,marginTop:20,display:'flex',flexDirection:'row'}}>
                    <Image style={{width:100,height:100,marginRight:10}} source={require('../assets/tv7.jpg')}/>
                    <View>
                        <Text>XII. VĂN BẢN ĐIỀU HÀNH</Text><br/>
                        <br/><br/><br/>
                        <Text style={{fontSize:12,color:'grey'}}>19:28 03/11/2022</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}