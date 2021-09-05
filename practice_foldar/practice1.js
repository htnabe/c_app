import React, {useState} from 'react';
import {View,StyleSheet,SafeAreaView,Flatlist,Text,TouchableOpacity} from 'react-native';
//import CheckBox from '@react-native-community/checkbox';

function App () {

  const [isloading, setisloading] = useState(true);
  const [data,setData] = useState([{
    "itemid":1,
    "時間割所属": "教育学部",
    "開講": "前期",
    "学年": "2 ,3 ,4",
    "曜日・時限": "月1, 月2",
    "時間割コード": "M532001",
    "Subject": "生活科内容構成研究",
    "担当": "川路　澄人",
    "棟名": "",
    "教室名": ""
  },
  { "itemid":2,
    "時間割所属": "教育学部",
    "開講": "前期",
    "学年": "2 ,3 ,4",
    "曜日・時限": "月1, 月2",
    "時間割コード": "M532011",
    "Subject": "生活科内容構成研究",
    "担当": "川路　澄人",
    "棟名": "",
    "教室名": ""
  },
  {
    "itemid":3,
    "時間割所属": "教育学部",
    "開講": "前期",
    "学年": "3 ,4",
    "曜日・時限": "月1, 月2",
    "時間割コード": "M596911",
    "Subject": "意味から考える英文法I",
    "担当": "林　高宣",
    "棟名": "",
    "教室名": ""
  }]);

  const renderItem = ({item, index}) => {
    return(
      <View>
        <Text>item.{item.Subject}</Text>
      </View>
    )
  }

 return (
   <SafeAreaView style={styles.container}>
     <Flatlist
       data={data}
       style ={styles.list}
       renderItem={renderItem}
       keyExtractor={item => item.itemid}
     />

     <View style={styles.wrapbtn}>
       <TouchableOpacity style={styles.btn}>
         <Text>show item selected</Text>
       </TouchableOpacity>
     </View>
   </SafeAreaView>
 );
}



const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  list: {
    flex:1,
    padding:8,
  },
  wrapbtn: {
    width:'100%',
    justifyContent:'center',
    alignItem:'center',
  },
  btn:{
    padding:16,
    backgroundColor: 'blue'
  },
})

export default App;