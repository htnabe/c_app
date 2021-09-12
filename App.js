import  React,  { useState } from 'react';
import { SafeAreaView ,StyleSheet ,Button, View, Text ,TextInput, TouchableOpacity, FlatList, Alert, TouchableHighlight, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Table, Row, Rows,TableWrapper, Col  } from 'react-native-table-component';
import { saveGakubuName } from './holddeta/savedeta';
//import { searchScreen } from './seachscreen';
//import { classTapScreen } from './classScreen';
import { readdeta } from './holddeta/readdeta';
//import { CheckBox } from 'react-native-elements';
import {CheckBox} from '@react-native-community/checkbox';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


//時間割管理ホーム画面
function HomeScreen({ navigation ,route}) {

  //let {kamoku}= route.params;

  //学部名保存
  const [gakubuValue, setGakubuName] = useState("hello shimane!");
  
  //alert終了+学部名保存
  const closepop1 =() => {
    try {
      saveGakubuName(['Gakubuname','生物資源科学部'])
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
  const [D1, setD1] = useState("環境分析科学");
  const [D2, setD2] = useState("汽水域生態学");
  const [D3, setD3] = useState("生命情報学");
  const [D4, setD4] = useState("微生物実験");
  const [D5, setD5] = useState("島根学");
  //setD1({kamoku})


  const tableHead1 = ['','月', '火', '水', '木','金'];
  const tableHead2 = ['1限', '2限', '3限', '4限','5限'];
  const tableData = [
    [D1, '2', '3', '4','5'],
    [D2, '2', '3', '4','5'],
    [D3, '2', '3', '4','5'],
    [D4, '2', '3', '4','5'],
    [D5, '2', '3', '4','5'],
  ];

  return (
    <SafeAreaView style={styles.container} >

      {/* 画面上(検索バー)部分 */}
      <View style={styles.upper}>
        <View>
          <TextInput style={styles.input} placeholder="授業科目検索"></TextInput>
        </View>
        <TouchableOpacity style={styles.buttoncontainer} onPress={() => navigation.navigate('search_Screen')}>
          <Text style={styles.kensakutext}>検索</Text>
        </TouchableOpacity>
      </View>

      {/* 時間割表 */}
      <View style={styles.tableall}>
        <Table borderStyle={styles.tableborder}>
          <Row data={tableHead1} style={styles.tableHead} textStyle={styles.table_dtext}/>
          <TableWrapper style={styles.tablewrapper}>
            <Col data={tableHead2} style={styles.tabletitle} textStyle={styles.table_titletext}/>
            <Rows data={tableData} flexArr={[1, 1, 1, 1, 1]} textStyle={styles.table_itext} numberOfLines={1} ellipsizeMode={'tail'}/>
          </TableWrapper>
        </Table>
      </View>

      {/* 画面下(学部名表示)部分 */}
      <View style={styles.bottom_horizen}>
        <View style={styles.buttomwaku}>
          <Text style={styles.buttomwakutext}>{gakubuValue}</Text>
        </View>
        <TouchableOpacity　style={styles.buttonsita} onPress={() => alert('まだ未設定です(登録学部の修正とかここでできるかも)')}>
          <Text style ={styles.buttomtext}>編集</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

//検索結果表示
const d1_Data = require('./assets/firstSemisterLecs/教育.json');


const Item = ({ 時間割所属, 科目, 担当, 時間割コード}) => (
  <View style={styles.itemSearch}>
    <View style={{flexDirection:'row'}}>
      <Text style={styles.id}>{時間割所属}</Text>
      <Text style={styles.title}>{科目}</Text>
      <Text style={styles.teacher}>{担当}</Text>
    </View>
  </View>
);


function searchScreen({navigation}) {

  const [data, setChecked] = useState([]);

  const onchangeValue = (itemSelected) => {
    const newData = data.map(item => {
      if (item.時間割コード == itemSelected.時間割コード) {
        return {
          ...item,
          selected: !item.selected
        }
      }
      return {
        ...item,
        selected: item.selected
      }
    })
    setChecked(newData)
  }
  
    const renderItem = ({ item }) => (
      <View style={{flexDirection:'row'}}>
        <TouchableHighlight style={{width:'90%'}} onPress={() => navigation.navigate("Classtap_Screen",item)}>
          <Item 時間割所属={item.時間割所属} 科目={item.科目} 担当={item.担当}/>
        </TouchableHighlight>
        <View style={{justifyContent:'center',borderWidth:1,}}>
          <CheckBox
            disabled={false}
            //checked={data}
            onValueChange ={() => onchangeValue(item)}
            //onPress = {() => setChecked(!checked)}
            style={{alignItems:'center', }}
          />
        </View>
      </View>
    );

    const onSelectItem = () => {
      const selected = data.filter(item => item.selected == true);
      let selectedvalue = '';
      selected.forEach(item => {
        selectedvalue = selectedvalue + item.title +'\n';
      });
      alert(selectedvalue)
    }
  
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
          <View style={styles.h4}>
            <Text style={styles.headerText}>追加</Text>
          </View>
        </View>

        <FlatList
          data={d1_Data}
          renderItem={renderItem}
          extraData={data}
          keyExtractor={item => item.時間割コード}
          style={styles.flatlist}
        />
        
        <View style={styles.searchTuikacontainer}>
          <TouchableOpacity style={styles.searchTuikaBtn} onPress ={() => onSelectItem()}>
            <Text style={styles.searchTuikaBtnText}>追加</Text>
          </TouchableOpacity>
        </View>
        
        
        
      </SafeAreaView>
    );
}

//詳細画面
function classTapScreen({ navigation: { goBack  }, route}){
  const { 科目 }= route.params
  const { 担当 }= route.params
  const { 教室名 }= route.params

  let balnkClass = null;
  if(教室名 =='') {
    balnkClass = 'データがありません';
  }else{
    balnkClass = 教室名;
  }

  return (
    <View style={styles.containerClass}>
      <View style={styles.classTapframe}>
        <Text style={styles.classTapHeader}>講義名</Text>
        <Text style={styles.classTapText}>{科目}</Text>
      </View>
      <View style={styles.classTapframe}>
        <Text style={styles.classTapHeader}>担当者名</Text>
        <Text style={styles.classTapText}>{担当}</Text>
      </View>
      <View style={styles.classTapframe}>
        <Text style={styles.classTapHeader}>曜日</Text>
        <Text style={styles.classTapText}>あとで調整</Text>
      </View>
      <View style={styles.classTapframe}>
        <Text style={styles.classTapHeader}>時限</Text>
        <Text style={styles.classTapText}>あとで調整</Text>
      </View>
      <View style={styles.classTapframe}>
        <Text style={styles.classTapHeader}>教室名</Text>
        <Text style={styles.classTapText}>{balnkClass}</Text>
      </View>
    
      <View style={styles.ctTuikaContainer}>
        <TouchableOpacity style={styles.ctTuikaBtn} onPress={() => goBack()}>
          <Text style={styles.ctTuikaBtnText}>追加</Text>
        </TouchableOpacity>
      </View>

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
    marginTop:10,
  },
  tableall: {
    width: "100%",
    flex:8,
    paddingTop: 20, 
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
  bottom_horizen: {
    flexDirection: 'row',
    width:'100%',
    flex:1,
  },
  buttomwaku: {
    color:'black',
    borderWidth:2,
    borderColor:'black',
    backgroundColor:'#d7e0ff',
    borderRadius: 10,
    marginLeft: 40,
    marginRight: 100,
    justifyContent:'center',
    alignItems:'center',
  },
  buttomwakutext: {
    fontWeight:'bold',
    color:'black',
    fontSize: 20,
    paddingHorizontal:5,
  },
  buttomtext: {
    fontSize:20,
    fontWeight:'bold'
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
  tableborder: {
    borderWidth: 2,
     borderColor: 'black',
  },
  table_dtext: {
    fontSize:25,
    paddingVertical:'10%',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  table_titletext: {
    fontSize:25,
    //paddingVertical:'70%',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  table_itext: {
    fontWeight:'bold',
    fontSize:15,
    paddingVertical:'65%',
    textAlign: 'center',
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
    //width:'90%',
    backgroundColor: '#b0caf9',
    padding: 20,
    borderWidth:1,
    borderColor:'black',
    //marginHorizontal: 1,
    flexDirection:'row'
  },
  searchHeader: {
    flexDirection:'row',
  },
  searchTuikaBtn: {
    width:'20%',
    borderColor:'black',
    borderWidth:2,
    borderRadius:10,
    alignItems:'center',
    backgroundColor:'#ffd2bc'
  },
  searchTuikacontainer: {
    alignItems:'flex-end',
    marginTop:10,
  },
  searchTuikaBtnText: {
    fontSize:20,
    padding:10,
    fontWeight:'bold',
    justifyContent:'center',
    alignItems:'center',
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
    marginVertical:15,
    fontSize:20,
    fontWeight:'bold',
  },
  id: {
    fontSize:15,
    fontWeight:'bold',
    width:'20%',
  },
  title: {
    fontSize: 15,
    width:'50%',
  },
  teacher: {
    fontSize:15,
    width:'20%',
  },
  checkboxSpace:{
    width:'15%',
    padding:10,
    padding:10,
  },
  containerClass:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff",
  },
  classTapframe: {
    marginVertical:25,
    justifyContent:'center',
    alignItems:'center',
  },
  classTapHeader: {
    fontSize:30,
    color:'blue',
    fontWeight:'bold',
  },
  classTapText: {
    fontSize:30,
    color:'black',
    fontWeight:'bold',
    marginTop:20,
  },
  ctTuikaContainer:{
    width:'30%',
    alignItems:'center',
  },
  ctTuikaBtn: {
    borderWidth:2,
    borderRadius:10,
    borderColor:'black',
    backgroundColor:'#ffd2bc'
  },
  ctTuikaBtnText: {
    fontSize:30,
    padding:10,
    fontWeight:'bold',
    color:'black',
  }

});

export default App;