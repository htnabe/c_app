import  React,  { useState } from 'react';
import { SafeAreaView ,StyleSheet ,Button, View, Text ,TextInput, Modal, TouchableOpacity, Animated, Dimensions, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Table, Row, Rows,TableWrapper, Col  } from 'react-native-table-component';
import { inputGakubudeta, saveGakubuname } from './holddeta/savedeta';
import { readdeta } from './holddeta/readdeta';
import d_1 from './assets/firstSemisterLecs/教育.json'; 
import d_2 from './assets/firstSemisterLecs/教育学.json'; 
import d_3 from './assets/firstSemisterLecs/教育学（教職）.json'; 
import d_4 from './assets/firstSemisterLecs/教養教育.json'; 
import d_5 from './assets/firstSemisterLecs/自然科学.json'; 
import d_6 from './assets/firstSemisterLecs/人間科学.json'; 
import d_7 from './assets/firstSemisterLecs/人間社会科学.json'; 
import d_8 from './assets/firstSemisterLecs/生物資源.json'; 
import d_9 from './assets/firstSemisterLecs/総合理工.json'; 
import d_10 from './assets/firstSemisterLecs/総合理工（博士後期）.json';
import d_11 from './assets/firstSemisterLecs/法文.json';


//画面サイズ取得 ←保留
var {HEIGHT, WIDTH} = Dimensions.get('window');
//console.log(HEIGHT,WIDTH);


//JSONからデータをまとめる関数、まとめて使う、データを単体で使う！
const MakeClassdeta= ({}) => {

   const class_1 = JSON.parse(d_1);  //教育
   const class_2 = JSON.parse(d_2);  //教育学
   const class_3 = JSON.parse(d_3);  //教育学(教職)
   const class_4 = JSON.parse(d_4);  //教養教育
   const class_5 = JSON.parse(d_5);  //自然科学
   const class_6 = JSON.parse(d_6);  //人間科学
   const class_7 = JSON.parse(d_7);  //人間社会科学
   const class_8 = JSON.parse(d_8);  //生物資源
   const class_9 = JSON.parse(d_9);  //総合理工
   const class_10 = JSON.parse(d_10);  //総合理工(博士後期)
   const class_11 = JSON.parse(d_11);  //法文


}


//ポップアップ画面  
const Modalpoup = ({visible, children}) => {

  const [showmodal, setshowmodal] = useState(visible);
  const scalevalue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    togglemodal();
  }, [visible]);
  const togglemodal = () =>{
    if(visible){
      setshowmodal(true);
      Animated.spring(scalevalue,{
        toValue:1,
        duration:500,
        useNativeDriver: true,
      }).start();
    }else{
      setTimeout(() => setshowmodal(false),300); //modalが閉じる前にアニメーションを実行
      Animated.spring(scalevalue, {
        tovalue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };
  return ( 
    <Modal transparent visible={showmodal}>
      <View style={styles.modalbacground}>
        <Animated.View 
          style={[styles.modalcontainer, {transform:[{scale: scalevalue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

//時間割管理ホーム画面
function HomeScreen({ navigation }) {

  //inputtext
  const [gakubuvalue, onChangeText] = useState("島根学部");

  //学部名保存
  const [Gakubutext, setGakubuname] = useState("");

  //学部入力(true false)保存
  const [displayPoup, setPoup] = useState(true);
  const getgakubu = () => {
    setGakubuname(gakubuvalue)

    setPoup(false)
    inputGakubudeta(displayPoup)
  }

  //ポップアップ画面
  const [visible,setVisible] = useState(false);

  //ポップアップ終了+学部名保存
  const closepop =() => {

    try {
      saveGakubuname(Gakubutext)
      setVisible(false)

    }catch(er) {
      alert(er)
    }
  } 

  //ポップアップ画面表示切り替え
  let [co,setco] = useState(0);
  if(co == 0) {
    setco(1)
    alert(
      'はじめまして',
      'まずは所属学部を登録しましょう',
      [
        {text: '所属学部を選ぶ', onPress: () => setVisible(true)},
      ],
      //{ cancelable: false }
    )
    //alert(visible)
  }


  const H_tableHead = ['','月', '火', '水', '木','金'];
  const H_tabletitle = ['1限', '2限', '3限', '4限','5限'];
  const H_tableData = [
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
        <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
          <Row data={H_tableHead} style={styles.tableHead} textStyle={styles.table_dtext}/>
          <TableWrapper style={styles.tablewrapper}>
            <Col data={H_tabletitle} style={styles.tabletitle} textStyle={styles.table_dtext}/>
            <Rows data={H_tableData} flexArr={[1, 1, 1, 1, 1]} textStyle={styles.table_itext}/>
          </TableWrapper>
        </Table>
      </View>

      <View style={styles.bottom}>
        <View>
          {/* ポップアップ画面 */}
          <Modalpoup visible = {visible}>
            <View style={{alignItems:'center'}}>
              
                {/* ポップアップ画面終了 */}
                <TouchableOpacity  style={styles.modalbtn_1} >
                  <Button title="閉じる" onPress={() => closepop()}/>
                </TouchableOpacity>
                
                <Text style={{fontSize:20, marginVertical:20, fontWeight:'bold'}}>所属する学部を入力してください</Text>      
                <TextInput style={styles.popuptext} onChangeText={text => onChangeText(text)} value={gakubuvalue} ></TextInput>
                

                {/* 学部名保存関数(setPoup)実行 */}
                <TouchableOpacity style={styles.decidebutton}>
                  <Text style={styles.decidebtntext} onPress={() => getgakubu()}>学部決定</Text>
                </TouchableOpacity>

            </View>
          </Modalpoup>
        </View>

        <View style={styles.bottom_horizen}>
          <Text style={styles.buttomtext}>{gakubuvalue}</Text>
          <View style={styles.buttonsita}>
            <Button title="編集" onPress={() => alert('まだ未設定です')}/>
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
}

//検索結果表示画面
export function SearchScreen({ navigation }) {

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

          <View style={{width:'100%',flex: 1,alignItems:'flex-end'}}> 
            <View style={{borderWidth:2,borderColor: "black",borderRadius:10,padding:5,width:'30%', backgroundColor:"#d7e0ff"}}>
              <Button title="追加" onPress={() => navigation.navigate('Home_Screen')} />
            </View>
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
export function ClasstapScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} >

      <View style={styles.c_component}>
        <Text style={{fontSize:30}}>講義名</Text>
        <Text style={{fontSize:30}}>微生物実験</Text>
      </View>

      <View style={styles.c_component}>
        <Text style={{fontSize:30}}>担当者名</Text>
        <Text style={{fontSize:30}}>島根太郎</Text>
      </View>

      <View style={styles.c_component}>
        <Text style={{fontSize:30}}>曜日</Text>
        <Text style={{fontSize:30}}>月1・月2</Text>
      </View>

      <View style={styles.c_component}>
        <Text style={{fontSize:30}}>時限</Text>

        <Text style={{fontSize:30}}>1・2</Text>
      </View>

      <View style={styles.c_component}>
        <Text style={{fontSize:30}}>教室</Text>
        <Text style={{fontSize:30}}>大学ホール</Text>
      </View>

      <View style={{width:'100%',flex: 1,alignItems:'center'}}>
        <View style={{flex: 1,width:"30%", borderWidth:2,borderColor: "black",backgroundColor:"#d7e0ff",borderRadius:10, padding:10,justifyContent:'center'}} >
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
    //height:HEIGHT,
    backgroundColor:'#fff',
  },
  upper: {
    width: "100%",
    flex:1,
    //height: HEIGHT * 0.2,
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
    height:'60%',
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
  c_component: {
    justifyContent:'center',
    alignItems:'center',
    marginVertical:25,
    flex:1,
  },

});

export default App;