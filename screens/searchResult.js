import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import { saveGakubuName } from '../holddeta/savedeta';
import { CheckBox } from 'react-native-elements';
import SeachScreenHeader from './SeachScreenHeader';

// d1_Dataを検索結果が含まれたjsonデータとして仮定
import d1_Data from '../assets/firstSemisterLecs/教育.json';

export default function searchScreen({ navigation }) {

  const [searchResultsData, setsearchResultsData] = useState([]);
  const [isChecked, setisChecked] = useState(true);
  //追加ボタン処理（テスト用データ）
  const test_Tuikabtn_0 = d1_Data[0]['曜日・時限'];
  const test_Tuikabtn_1 = d1_Data[0]['科目'];

  getListData = async () => {
    // d1_Dataに"check" = falseの項を追加
    await d1_Data.forEach(value => value.checked = false);
    setsearchResultsData(d1_Data);
  }

  // マウント時のみ実行される
  useEffect(() => {
    getListData();
  }, []);

   // チェックマークを付けたデータで "check" = true or falseを設定
  const checkMark = (classId) => {
    const classIdNumber = searchResultsData.findIndex((id) => id.時間割コード == classId);
    let newData = searchResultsData;
    newData[classIdNumber].checked = !newData[classIdNumber].checked;
    setsearchResultsData(newData);
    setisChecked(!isChecked);
  }

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
          checked={item.checked}
          onPress={() => checkMark(item.時間割コード)}
        />
      </View>
    </View>
  );

  // homeスクリーンへデータを渡す処理
  const passDeta = () => {
    saveGakubuName([test_Tuikabtn_0, test_Tuikabtn_1])
    navigation.navigate('Home_Screen')
  }

  return (
    <SafeAreaView style={styles.containerSearch}>
      {/* 上部４項目 */}
      <SeachScreenHeader />
      <FlatList
        data={searchResultsData}
        renderItem={renderItem}
        keyExtractor={item => item.時間割コード}
      />
      <View style={styles.searchTuikacontainer}>
        <TouchableOpacity style={styles.searchTuikaBtn} onPress={() => passDeta()}>
          <Text style={styles.searchTuikaBtnText}>追加</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
})
