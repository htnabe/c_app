import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import { CheckBox } from 'react-native-elements';

// d1_Dataを検索結果が含まれたjsonデータとして仮定
import d1_Data from '../assets/firstSemisterLecs/総合理工.json';

export default function searchScreen({ navigation }, searchedLectureInfo) {

  // searchResultsData: 検索結果が入る
  const [searchResultsData, setsearchResultsData] = useState([]);
  const [isChecked, setisChecked] = useState(true);

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
  const passData = () => {
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
      <FlatList
        data={searchResultsData}
        renderItem={renderItem}
        keyExtractor={item => item.時間割コード}
      />
      <View style={styles.searchTuikacontainer}>
        <TouchableOpacity style={styles.searchTuikaBtn} onPress={() => passData()}>
          <Text style={styles.searchTuikaBtnText}>追加</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // 検索結果一覧のデザイン
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
  // 画面下の追加ボタンデザイン
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
  // 検索画面ヘッダー関連
  containerSearch: {
    flex: 1,
  },
  searchHeader: {
    flexDirection: 'row',
  },
  headerText: {
    marginVertical: 15,
    fontSize: 20,
    fontWeight: 'bold',
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
})
