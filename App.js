import * as React from 'react';
import { SafeAreaView ,StyleSheet ,Button, View, Text ,TextInput, Modal, TouchableOpacity, Animated, Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Table, Row, Rows,TableWrapper, Col  } from 'react-native-table-component';
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


//JSONからデータをまとめる関数
const makeClassdeta= ({}) => {

   const class_1 = JSON.parse(d_1);
   const class_2 = JSON.parse(d_2);
   const class_3 = JSON.parse(d_3);
   const class_4 = JSON.parse(d_4);
   const class_5 = JSON.parse(d_5);
   const class_6 = JSON.parse(d_6);
   const class_7 = JSON.parse(d_7);
   const class_8 = JSON.parse(d_8);
   const class_9 = JSON.parse(d_9);
   const class_10 = JSON.parse(d_10);
   const class_11 = JSON.parse(d_11);

   

}


//画面サイズ取得 ←なんかできない？？
var {HEIGHT, WIDTH} = Dimensions.get('window');
console.log(HEIGHT,WIDTH);

//ポップアップ画面
const Modalpoup = ({visible, children}) => {

  const [showmodal, setshowmodal] = React.useState(visible);
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
      setTimeout(() => setshowmodal(false),300); //モデルが閉じる前にアニメーションを実行
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

  const H_tableHead = ['','月', '火', '水', '木','金'];
  const H_tabletitle = ['1限', '2限', '3限', '4限','5限'];
  const H_tableData = [
    ['1', '2', '3', '4','5'],
    ['1', '2', '3', '4','5'],
    ['1', '2', '3', '4','5'],
    ['1', '2', '3', '4','5'],
    ['1', '2', '3', '4','5'],
  ];

  const [visible,setVisible] = React.useState(false);

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
          <Modalpoup visible = {visible}>
            <View style={{alignItems:'center'}}>
              <View style={styles.modalheader}>

                <TouchableOpacity>
                  <Button title="入力完了" onPress={() => setVisible(false)}/>
                </TouchableOpacity>

                <Text　style={{fontSize:20, marginVertical:20, fontWeight:'bold'}}>所属する学部を入力してください</Text>      
                <TextInput style={styles.popuptext} placeholder="例　生物資源科学部"></TextInput>

              </View>
            </View>
          </Modalpoup>
          <Button title="ポップアップ" onPress={() => setVisible(true)}/>
        </View>

        <View style={styles.buttoncontainer}>
          <Button title="編集" onPress={() => navigation.navigate('')}/>
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
function ClasstapScreen({ navigation }) {
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
    justifyContent:'flex-start',
    alignItems:'flex-end',
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
  boldtext: {
    fontWeight: 'bold',
    fontSize: 30,
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
  modalheader: {
    width:"100%",
    alignItems:'center',
    justifyContent:"center",

  },
  popuptext: {
    backgroundColor:'#d7e0ff',
    width:"80%",
    paddingVertical:10,
    borderWidth:2,
    fontSize:25,
    color:'black',
  },
});

export default App;

