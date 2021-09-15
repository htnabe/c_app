import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Alert, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { saveGakubuName } from './holddeta/savedeta';
import { ReadTableData } from './holddeta/ReadTableData';
import { CheckBox } from 'react-native-elements';
import HomeScreenPopup from './screens/homeScreenPopup';
import HomeScreenProp from './screens/homeScreenProp';
import renderItems from './screens/renderItems';


//時間割管理ホーム画面
function homeScreen({ navigation, route }) {

  //ポップアップ
  HomeScreenPopup();

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

      <HomeScreenProp />

    </SafeAreaView>
  );
}

//教育.jsonファイル(仮データとして使用)
const d1_Data = require('./assets/firstSemisterLecs/教育.json');

function searchScreen({ navigation }) {

  //Flatlist + checkBox
  renderItems();

  //追加ボタン処理（テスト）
  const test_Tuikabtn_0 = d1_Data[0]['曜日・時限'];
  const test_Tuikabtn_1 = d1_Data[0]['科目'];
  const passDeta = () => {
    saveGakubuName([test_Tuikabtn_0, test_Tuikabtn_1])
    navigation.navigate('Home_Screen')
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

      <renderItems />

      <View style={styles.searchTuikacontainer}>
        <TouchableOpacity style={styles.searchTuikaBtn} onPress={() => passDeta()}>
          <Text style={styles.searchTuikaBtnText}>追加</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

//授業詳細画面
function classTapScreen({ navigation: { goBack }, route }) {
  const { 科目 } = route.params
  const { 担当 } = route.params
  const { 教室名 } = route.params

  let balnkClass = null;
  if (教室名 == '') {
    balnkClass = 'データがありません';
  } else {
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
        <Stack.Screen name="Home_Screen" component={homeScreen} />
        <Stack.Screen name="search_Screen" component={searchScreen} />
        <Stack.Screen name="Classtap_Screen" component={classTapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  upper: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  bottom: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    color: 'black',
    fontSize: 20,
    width: 210,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    padding: 12,
    marginTop: 10
  },
  buttoncontainer: {
    width: "30%",
    height: "60%",
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#d7e0ff",
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  kensakutext: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold'
  },
  containerSearch: {
    flex: 1,
  },
  searchHeader: {
    flexDirection: 'row',
  },
  searchTuikaBtn: {
    width: '20%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#ffd2bc'
  },
  searchTuikacontainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  searchTuikaBtnText: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    width: '20%',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h2: {
    width: '40%',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h3: {
    width: '20%',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h4: {
    width: '20%',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    marginVertical: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerClass: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff",
  },
  classTapframe: {
    marginVertical: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  classTapHeader: {
    fontSize: 30,
    color: 'blue',
    fontWeight: 'bold',
  },
  classTapText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
  },
  ctTuikaContainer: {
    width: '30%',
    alignItems: 'center',
  },
  ctTuikaBtn: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: '#ffd2bc'
  },
  ctTuikaBtnText: {
    fontSize: 30,
    padding: 10,
    fontWeight: 'bold',
    color: 'black',
  }
});
export default App;