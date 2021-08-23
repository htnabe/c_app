import * as React from 'react';
import { SafeAreaView ,StyleSheet ,Button, View, Text ,TextInput, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Table, Row, Rows,TableWrapper, Col  } from 'react-native-table-component';
import d_1 from './教育.json'; 
import d_2 from './教育学.json'; 
import d_3 from './教育学 (教職).json'; 
import d_4 from './教養教育.json'; 
import d_5 from './自然科学.json'; 
import d_6 from './人間科学.json'; 
import d_7 from './人間社会科学.json'; 
import d_8 from './生物資源.json'; 
import d_9 from './総合理工 (博士後期) .json'; 
import d_10 from './法文.json'; 


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
    //backgroundColor: 'powderblue',
    backgroundColor:'#fff'
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
    justifyContent:'flex-start',
    alignItems:'flex-end',
  },
  input: {
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
});

export default App;

