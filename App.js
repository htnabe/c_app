import  React,  { useState } from 'react';
import { SafeAreaView ,StyleSheet ,Button, View, Text ,TextInput, TouchableOpacity, FlatList, Alert, TouchableHighlight, CheckBox} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Table, Row, Rows,TableWrapper, Col  } from 'react-native-table-component';
import { inputGakubudeta, saveGakubuName } from './holddeta/savedeta';
//import { searchScreen } from './seachscreen';
//import { classTapScreen } from './classScreen';
import { readdeta } from './holddeta/readdeta';
//import { CheckBox } from 'react-native-elements';


//時間割管理ホーム画面
function HomeScreen({ navigation }) {

  //学部名保存
  const [gakubuValue, setGakubuName] = useState("hello shimane!");

  //alert終了+学部名保存
  const closepop1 =() => {
    try {
      saveGakubuName("生物資源科学部")
      setGakubuName("生物資源科学部")
    }catch(er) {
      alert(er)
    }
  }

  const closepop2 =() => {
    try {
      saveGakubuName("総合理工学部")
      setGakubuName("総合理工学部")
    }catch(er) {
      alert(er)
    }
  }

  const closepop3 =() => {
    try {
      saveGakubuName("人間科学部")
      setGakubuName("人間科学部")
    }catch(er) {
      alert(er)
    }
  }

  const closepop4 =() => {
    try {
      saveGakubuName("教育学部")
      setGakubuName("教育学部")
    }catch(er) {
      alert(er)
    }
  }

  const closepop5 =() => {
    try {
      saveGakubuName("法文学部")
      setGakubuName("法文学部")
    }catch(er) {
      alert(er)
    }
  }

  const closepop6 =() => {
    try {
      saveGakubuName("人文社会学研究科")
      setGakubuName("人文社会学研究科")
    }catch(er) {
      alert(er)
    }
  }

  const closepop7 =() => {
    try {
      saveGakubuName("教育学研究科")
      setGakubuName("教育学研究科")
    }catch(er) {
      alert(er)
    }
  }

  const closepop8 =() => {
    try {
      saveGakubuName("医学系研究科")
      setGakubuName("医学系研究科")
    }catch(er) {
      alert(er)
    }
  }

  const closepop9 =() => {
    try {
      saveGakubuName("自然科学研究科")
      setGakubuName("自然科学研究科")
    }catch(er) {
      alert(er)
    }
  }

  const closepop10 =() => {
    try {
      saveGakubuName("総合理工研究科")
      setGakubuName("総合理工研究科")
    }catch(er) {
      alert(er)
    }
  }

  //ポップアップ画面表示切り替え
  let [co,setco] = useState(0);
  if(co == 0) {
    setco(1)
    Alert.alert(
      'はじめまして',
      'まずは所属学部・研究科を登録しましょう',
      [
        {text: '生物資源科学部', onPress: () => closepop1()},
        {text: '総合理工学部', onPress: () => closepop2()},
        {text: '人間科学部', onPress: () => closepop3()},
        {text: '教育学部', onPress: () => closepop4()},
        {text: '法文学部', onPress: () => closepop5()},
        {text: '人文社会学研究科', onPress: () => closepop6()},
        {text: '教育学研究科', onPress: () => closepop7()},
        {text: '医学系研究科', onPress: () => closepop8()},
        {text: '自然科学研究科', onPress: () => closepop9()},
        {text: '総合理工研究科', onPress: () => closepop10()},
      ],
    )
  }

  //テーブルに表示するデータ
  const tableHead1 = ['','月', '火', '水', '木','金'];
  const tableHead2 = ['1限', '2限', '3限', '4限','5限'];
  const tableData = [
    ['1', '2', '3', '4','5'],
    ['1', '2', '3', '4','5'],
    ['1', '2', '3', '4','5'],
    ['1', '2', '3', '4','5'],
    ['1', '2', '3', '4','5'],
  ];

  return (
    <SafeAreaView style={styles.container} >

      <View style={styles.upper}>
        <View>
          <TextInput style={styles.input} placeholder="授業科目検索部分"></TextInput>
        </View>
        
        <TouchableOpacity style={styles.buttoncontainer} onPress={() => navigation.navigate('search_Screen')}>
          <Text style={styles.kensakutext}>検索</Text>
        </TouchableOpacity>
        
      </View>

      <View style={styles.tableall}>
        <Table borderStyle={styles.tableborder}>
          <Row data={tableHead1} style={styles.tableHead} textStyle={styles.table_dtext}/>
          <TableWrapper style={styles.tablewrapper}>
            <Col data={tableHead2} style={styles.tabletitle} textStyle={styles.table_dtext}/>
            <Rows data={tableData} flexArr={[1, 1, 1, 1, 1]} textStyle={styles.table_itext}/>
          </TableWrapper>
        </Table>
      </View>

        <View style={styles.bottom_horizen}>
          <Text style={styles.buttomwaku}>{gakubuValue}</Text>
          <TouchableOpacity　style={styles.buttonsita} onPress={() => alert('まだ未設定です(登録学部の修正とかここでできるかも)')}>
            <Text style ={styles.buttomtext}>編集</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

//検索結果表示
const d1_Data = require('./assets/firstSemisterLecs/教育.json');

//const [isSelected, setSelection] = useState(false);


const Item = ({ 時間割所属, 科目, 担当}) => (
  <View style={styles.itemSearch}>
    <Text style={styles.id}>{時間割所属}</Text>
    <Text style={styles.title}>{科目}</Text>
    <Text style={styles.teacher}>{担当}</Text>
  </View>
);


function searchScreen({navigation}) {
  

    const renderItem = ({ item }) => (
      <View>
        <TouchableHighlight onPress={() => navigation.navigate("Classtap_Screen",item)} underlayColor={'red'}>
          <Item 時間割所属={item.時間割所属} 科目={item.科目} 担当={item.担当}/>
        </TouchableHighlight>
        {/* <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkboxconatiner}/> */}
      </View>
    );
  
    return (
      <SafeAreaView style={styles.containerSearch}>

        <View style={styles.searchHeader}>
          <View style={styles.h1}>
            <Text style={styles.headerText}>所属</Text>
          </View>
          <View style={styles.h2}>
            <Text style={styles.headerText}>科目</Text>
          </View>
          <View style={styles.h3}>
            <Text style={styles.headerText}>担当</Text>
          </View>
          
        </View>

        <FlatList
          data={d1_Data}
          renderItem={renderItem}
          keyExtractor={item => item.時間割コード}
          style={styles.flatlist}
        />
        
      </SafeAreaView>
    );
}

//詳細画面
function classTapScreen({navigation, route}){
  const { 科目 }= route.params
  const { 担当 }= route.params
  const { 教室名 }= route.params
  return (
    <View style={styles.containerClass}>
      <View style={styles.classTapframe}>
        <Text style={styles.classTapText}>講義名</Text>
        <Text style={styles.classTapText}>{科目}</Text>
      </View>
      <View style={styles.classTapframe}>
        <Text style={styles.classTapText}>担当者名</Text>
        <Text style={styles.classTapText}>{担当}</Text>
      </View>
      <View style={styles.classTapframe}>
        <Text style={styles.classTapText}>曜日</Text>
        <Text style={styles.classTapText}>エラー</Text>
      </View>
      <View style={styles.classTapframe}>
        <Text style={styles.classTapText}>時限</Text>
        <Text style={styles.classTapText}>エラー</Text>
      </View>
      <View style={styles.classTapframe}>
        <Text style={styles.classTapText}>教室名</Text>
        <Text style={styles.classTapText}>{教室名}</Text>
      </View>
      <TouchableOpacity style={styles.homeBackbtnStyle} onPress={() => navigation.navigate('Home_Screen')}>
        <Text style={styles.homeBackbtn}>追加</Text>
      </TouchableOpacity>
      {/* <Button title="追加" onPress={() => navigation.navigate('Home_Screen')}/> */}
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home_Screen">
        <Stack.Screen name="Home_Screen" component={HomeScreen} />
        <Stack.Screen name="search_Screen" component={searchScreen} />
        <Stack.Screen name="Classtap_Screen" component={classTapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
  },
  upper: {
    width: "100%",
    flex:1,
    backgroundColor: "#fff",
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems: 'center',
  },
  tableall: {
    width: "100%",
    flex:8,
    paddingTop: 10, 
    backgroundColor: '#fff',
  },
  bottom: {
    width: "100%",
    flex:1,
    backgroundColor: "#fff",
    justifyContent:'space-around',
    alignItems: 'center',
  },
  input: {
    color:'black',
    fontSize:20,
    width: 210,
    borderColor:'black',
    borderWidth:2,
    borderRadius:10,
    padding:12,
    marginTop:10
  },
  buttoncontainer: {
    width: "30%",
    height: "60%",
    borderWidth:2,
    borderColor: "black",
    backgroundColor:"#d7e0ff",
    borderRadius:10,
    padding:5,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
  },
  kensakubtn: {
    borderColor:'black',
    borderWidth:2,
    borderRadius:10,
  },
  kensakutext: {
    fontSize:20,
    padding:10,
    fontWeight:'bold'
  },
  tablewrapper: {
     flexDirection: 'row' ,
  },
  tabletitle: {
     backgroundColor: '#d7e0ff',
  },
  table_dtext: {
    fontSize:25,
    paddingVertical:30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  table_itext: {
    fontSize:23,
    paddingVertical:35,
    textAlign: 'center'
  },
  modalbacground: {
    flex:1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center',
  },
  modalcontainer: {
    width:'80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation:20,
  },
  modalbtn_1: {
    width:"30%",
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#d7e0ff',
    borderWidth:2,
    borderColor: "black",
    borderRadius:10,
  },
  decidebutton: {
    marginTop:20,
    width:"40%",
    alignItems:'center',
    justifyContent:"center",
    borderWidth:2,
    borderColor: "red",
    borderRadius:10,
    backgroundColor:'white',
  },
  decidebtntext: {
    fontSize:20,
    color: 'red',
    paddingVertical:10,
    fontWeight:'bold'
  },
  popuptext: {
    width:'80%',
    marginVertical: 20,
    borderRadius: 10,
    borderColor:'black',
    borderWidth:2,
    backgroundColor:'#d7e0ff',
    paddingVertical:20,
    fontSize:20,
  },
  bottom_horizen: {
    flexDirection: 'row',
    width:'100%',
    flex:1,
  },
  buttomwaku: {
    color:'black',
    fontWeight:'bold',
    fontSize: 20,
    borderWidth:2,
    borderColor:'black',
    backgroundColor:'#d7e0ff',
    borderRadius: 10,
    padding:5,
    marginLeft: 40,
    marginRight: 100,
  },
  buttomtext: {
    fontSize:20,
  },
  buttonsita: {
    backgroundColor:'#d7e0ff',
    borderRadius: 10,
    borderColor:'black',
    borderWidth:2,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:20,
  },
  tableall: {
    width: "100%",
    flex:8,
    paddingTop: 10, 
    backgroundColor: '#fff',
  },
  tableborder: {
    borderWidth: 2,
     borderColor: 'black',
  },
  tablehead: {
    backgroundColor: 'red'
  },
  tablewrapper: {
     flexDirection: 'row' ,
  },
  tabletitle: {
     backgroundColor: '#d7e0ff',
  },
  table_dtext: {
    fontSize:25,
    paddingVertical:30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  table_itext: {
    fontSize:23,
    paddingVertical:35,
    textAlign: 'center'
  },
  tuikabtn: {
    width:'100%',
    flex: 1,
    alignItems:'flex-end'
  },
  classtapBottom: {
    width:'100%',
    flex: 1,
    alignItems:'center',
  },
  c_component: {
    justifyContent:'center',
    alignItems:'center',
    marginVertical:25,
    flex:1,
    fontSize:30,
  },
  classtapbtn: {
     flex: 1,
     width:"30%",
     borderWidth:2,
     borderColor: "black",
     backgroundColor:"#d7e0ff",
     borderRadius:10,
     padding:10,
     justifyContent:'center',
  },
  gakubuValueText: {
    fontSize:30,
  },
  containerSearch: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  itemSearch: {
    backgroundColor: '#b0caf9',
    padding: 20,
    borderWidth:1,
    borderColor:'black',
    marginHorizontal: 1,
    flexDirection:'row'
  },
  searchHeader: {
    flexDirection:'row',
  },
  h1: {
    width:'20%',
    borderWidth:2,
    borderColor:'black',
    alignItems:'center',
    justifyContent:'center',
  },
  h2: {
    width:'40%',
    borderWidth:2,
    borderColor:'black',
    alignItems:'center',
    justifyContent:'center',
  },
  h3: {
    width:'20%',
    borderWidth:2,
    borderColor:'black',
    alignItems:'center',
    justifyContent:'center',
  },
  h4: {
    width:'20%',
    borderWidth:2,
    borderColor:'black',
    alignItems:'center',
    justifyContent:'center',
  },
  headerText: {
    marginVertical:10,
    fontSize:20,
    fontWeight:'bold',
  },
  checkboxconatiner: {
    width:'20%',
  },
  id: {
    fontSize:15,
    fontWeight:'bold',
    width:'20%',
  },
  title: {
    fontSize: 15,
    width:'55%',
  },
  teacher: {
    fontSize:15,
    width:'25%',
  },
  containerClass:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff",
  },
  classTapframe: {
    marginVertical:20,
    justifyContent:'center',
    alignItems:'center',
  },
  classTapText: {
    fontSize:30,
    color:'black',
    fontWeight:'bold',
    marginVertical:5,
  },
  homeBackbtnStyle: {
    borderColor:'red',
    borderWidth:5,
    borderRadius:10,
  },
  homeBackbtn: {
    padding:10,
    fontSize:30,
    color:'red',
    fontWeight:'bold',
  }

});

export default App;