import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';


export default function Bannang(){
    return(
        <View>

            <View style ={{flexDirection :'row'}} >
            <Image source={require('../assets/sach.jpg')}  style={{width:150,height:150}}  />
            <Text style={{fontSize:18,marginLeft:20}}>Bản năng</Text>
            <Text style={{marginTop:30,marginLeft:-100}}>10.3k lượt nghe</Text>
            <Pressable style={{justifyContent:'center',alignItems:'center',width:100,borderRadius:20,marginTop:70,marginLeft:-100,backgroundColor:'#3399FF',height:30}}>Phát tất cả</Pressable>
            <Pressable style={{justifyContent:'center',alignItems:'center',width:100,borderRadius:20,marginTop:70,marginLeft:20,backgroundColor:'#CCCCCC',height:30}}>Nghe Thử</Pressable>
            </View>

            <Text>Lời tựa</Text>
            <Text>Tác phẩm đã khai thác thành công và hiệu quả đề tài đối mặt với những cám dỗ khó tránh nhất. Nhưng trên tất cả, cuốn sách đã xây dựng một hình ảnh nhân vật có tính độc lập cao, có thể tự quyết định vấn đề mà không cần đến sự trợ giúp của người khác. Trước khi có chiếc bút chì màu đỏ, Min-ho chỉ là một cậu học sinh bình thường, điểm số không xuất sắc. Trong các bài tập viết nhật ký, trang nhật ký của Min-ho vẫn thường được đóng mộc xanh dương, dành cho những bài trung bình và yếu. Và tuyệt nhiên, từ trước tới nay cậu chưa bao giờ được mộc đỏ. Mọi chuyện bắt đầu thay đổi khi Min-ho nhặt được chiếc bút chì màu đỏ tại trường học. Cầm cây bút lên viết như mọi khi, cậu nhận ra đây là một cây bút thần kỳ, chỉ cần đưa bút lên trang giấy nó sẽ chuyển động và viết lên những lời hay ý đẹp. Đặc biệt, cây bút không bị mòn dù Min-ho có sử dụng nhiều đến đâu. Không chỉ thầy giáo và bạn bè trong lớp bất ngờ mà ngay cả bản thân Min-ho cũng bất ngờ khi những bài văn của cậu nhận được những lời khen ngợi, thậm chí còn được giải vàng văn hay cấp trường, điều mà Min-ho chưa từng nghĩ tới.</Text>
        </View>
    )
}