import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Alert, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { saveGakubuName } from './holddeta/savedeta';
import { ReadTableData } from './holddeta/ReadTableData';
import { CheckBox } from 'react-native-elements';
import HomeScreenPopup from './screens/homeScreenPopup';
import HomeScreenProp from './screens/homeScreenProp';
import SeachScreenHeader from './screens/SeachScreenHeader';

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
      {/* テーブル */}
      <HomeScreenProp />
    </SafeAreaView>
  );
}

//searchScreen画面
function searchScreen({ navigation }) {
  //教育.jsonファイル(仮データとして使用)
  const d1_Data = require('./assets/firstSemisterLecs/教育.json');

  const [data, setChecked] = useState(false);

  const Item = ({ 時間割所属, 科目, 担当 }) => (
    <View style={styles.itemSearch}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.id}>{時間割所属}</Text>
        <Text style={styles.title}>{科目}</Text>
        <Text style={styles.teacher}>{担当}</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row' }}>
      <TouchableHighlight style={{ width: '90%' }} onPress={() => navigation.navigate("Classtap_Screen", item)}>
        <Item 時間割所属={item.時間割所属} 科目={item.科目} 担当={item.担当} />
      </TouchableHighlight>
      <View style={{ justifyContent: 'center', borderWidth: 1, }}>
        <CheckBox
          checked={data}
          onPress={() => setChecked(!data)}
          style={{ alignItems: 'center' }}
        />
      </View>
    </View>
  );
  //追加ボタン処理（テスト）
  const test_Tuikabtn_0 = d1_Data[0]['曜日・時限'];
  const test_Tuikabtn_1 = d1_Data[0]['科目'];
  const passDeta = () => {
    saveGakubuName([test_Tuikabtn_0, test_Tuikabtn_1])
    navigation.navigate('Home_Screen')
  }

  return (
    <SafeAreaView style={styles.containerSearch}>
      {/* 上部４項目 */}
      <SeachScreenHeader />

      <FlatList
        data={d1_Data}
        renderItem={renderItem}
        extraData={data}
        keyExtractor={item => item.時間割コード}
        style={styles.flatlist}
      />

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
  itemSearch: {
    backgroundColor: '#b0caf9',
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row'
  },
  id: {
    fontSize: 15,
    fontWeight: 'bold',
    width: '20%',
  },
  title: {
    fontSize: 15,
    width: '50%',
  },
  teacher: {
    fontSize: 15,
    width: '20%',
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