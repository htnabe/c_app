import  React,  { useState } from 'react';
import { SafeAreaView ,StyleSheet ,Button, View, Text ,TextInput, Modal, TouchableOpacity, Animated, Dimensions, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Table, Row, Rows,TableWrapper, Col  } from 'react-native-table-component';
import { inputGakubudeta, saveGakubuName } from './holddeta/savedeta';
import { readdeta } from './holddeta/readdeta';
import { AirbnbRating } from 'react-native-elements';


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
        <View style={styles.buttoncontainer}>
          <Button title="検索" onPress={() => navigation.navigate('Search_Screen')}/>
        </View>
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
          <Text style={styles.buttomtext}>{gakubuValue}</Text>
          <View style={styles.buttonsita}>
            <Button title="編集" onPress={() => alert('まだ未設定です(登録学部の修正とかここでできるかも)')}/>
          </View>
        </View>

    </SafeAreaView>
  );
}


//検索結果表示画面
function SearchScreen({ navigation }) {

  const K_tableHead = ['','講義名', '担当者名', '追加'];
  const K_tabletitle = ['1', '2', '3', '4','5'];
  const K_tableData = [
    ['1', '2', '□'],
    ['1', '2', '□'],
    ['1', '2', '□'],
    ['1', '2', '□'],
    ['1', '2', '□'],
  ];
  
  return (
    <SafeAreaView style={styles.container}>
        
          {/* <Checkbox value={box_1_value} onChange={() => setCvlaue(true)}></Checkbox> */}

          <View style={{flex:7,backgroundColor:"#fff",width:"100%"}}>
            <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
              <Row data={K_tableHead} textStyle={styles.table_dtext} flexArr={[1, 1.5, 1.5, 1]}/>
              <TableWrapper style={styles.tablewrapper}>
                <Col data={K_tabletitle} style={styles.tabletitle} textStyle={styles.table_dtext}/>
                <Rows data={K_tableData} flexArr={[1.5, 1.5, 1]} textStyle={styles.table_itext}/>
              </TableWrapper>
            </Table>
          </View>

          <View style={styles.tuikabtn}>        
              <Button title="追加" onPress={() => navigation.navigate('Home_Screen')} />
          </View>
          
          <View style={{width:'100%',flex: 1,alignItems:'flex-end'}}> 
            <View style={{flex: 1,width:"70%", borderColor: "black",backgroundColor:"#d7e0ff",borderRadius:10, padding:10}}>
              <Button title="Classtap_screenへの遷移" onPress={() => navigation.navigate('Classtap_Screen')} />
            </View>
          </View>
      
    </SafeAreaView>
  );
}

//講義名をタップ画面
function ClasstapScreen({ navigation }) {

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.c_component}>
        <Text style={styles.gakubuValueText}>講義名</Text>
        <Text style={styles.gakubuValueText}>微生物実験</Text>
      </View>
      <View style={styles.c_component}>
        <Text style={styles.gakubuValueText}>担当者名</Text>
        <Text style={styles.gakubuValueText}>島根太郎</Text>
      </View>
      <View style={styles.c_component}>
        <Text style={styles.gakubuValueText}>曜日</Text>
        <Text style={styles.gakubuValueText}>月1・月2</Text>
      </View>
      <View style={styles.c_component}>
        <Text style={styles.gakubuValueText}>時限</Text>
        <Text style={styles.gakubuValueText}>1・2</Text>
      </View>
      <View style={styles.c_component}>
        <Text style={styles.gakubuValueText}>教室</Text>
        <Text style={styles.gakubuValueText}>大学ホール</Text>
      </View>
      <View style={styles.classtapBottom}>
        <View style={styles.classtapbtn} >
          <Button title='追加' onPress={() => navigation.navigate('Search_Screen')} />
        </View>
      </View>

    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home_Screen">
        <Stack.Screen name="Home_Screen" component={HomeScreen} />
        <Stack.Screen name="Search_Screen" component={SearchScreen} />
        <Stack.Screen name="Classtap_Screen" component={ClasstapScreen} />
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
    justifyContent:'flex-end'
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
  buttomtext: {
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
  buttonsita: {
    backgroundColor:'#d7e0ff',
    borderRadius: 10,
    borderColor:'black',
    borderWidth:2,
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
  }

});

export default App;