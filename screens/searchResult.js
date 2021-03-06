// Flatlistのパフォーマンス改善が必須
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import { CheckBox } from 'react-native-elements';
import SearchLecture from '../appFunction/searchLecture';
import { useRoute, useNavigation } from '@react-navigation/native';

import {saveData} from '../holddeta/saveData'

export default function searchScreen() {

  // searchResultsData: 検索結果が入る
  const [searchResultsData, setsearchResultsData] = useState([]);
  const [isChecked, setisChecked] = useState(true);
  const route = useRoute();
  const navigation = useNavigation();

  getListData = async () => {
    // 検索実行
    const searchedLecture = await SearchLecture(route.params.keyWord);
    // "check" = falseの項を追加
    searchedLecture.forEach(value => value.checked = false);
    setsearchResultsData(searchedLecture);
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
  }

  const Item = ({ 科目, 担当 }) => (
    <View style={styles.itemSearch}>
      <View style={{ flexDirection: 'row'}}>
        <Text style={styles.title}>{科目}</Text>
        <Text style={styles.teacher}>{担当}</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row' , alignItems: 'center', }}>
      <TouchableHighlight style={{ width: '80%' }} onPress={() => navigation.navigate("Classtap_Screen", item)}>
        <Item 科目={item.科目} 担当={item.担当} />
      </TouchableHighlight>
      <View style={{ borderWidth: 1, borderColor: '#dcdcdc', width: '100%', height: '100%'}}>
        <CheckBox
          checked={item.checked}
          onPress={() => { checkMark(item.時間割コード); setisChecked(!isChecked);}}
        />
      </View>
    </View>
  );

  // homeスクリーンへデータを渡す処理
  const storeFilteredData = () => {
    const selectedLecture = JSON.stringify(searchResultsData.filter((lecture) => lecture.checked));
    saveData(['tableKey', selectedLecture])
  }

  return (
    <SafeAreaView style={styles.containerSearch}>
      <View style={styles.headerContainer}>
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
        <TouchableOpacity style={styles.searchTuikaBtn} onPress={() => { navigation.navigate('Home_Screen'); storeFilteredData();}}>
          <Text style={styles.searchTuikaBtnText}>時間割に追加</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // 検索結果一覧のデザイン
  itemSearch: {
    backgroundColor: '#167F92',
    flexDirection: 'row'
  },
  title: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    padding: 18,
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    width: '50%',
  },
  teacher: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    padding: 18,
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    width: '50%',
  },
  // 画面下の追加ボタンデザイン
  searchTuikaBtn: {
    width: '50%',
    borderColor: '#dcdcdc',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#78bbc7'
  },
  searchTuikacontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  },
  searchTuikaBtnText: {
    fontSize: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  // 検索画面ヘッダー関連
  containerSearch: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
},
  headerText: {
    marginVertical: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  h2: {
    width: '40%',
    borderWidth: 1,
    borderColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h3: {
    width: '40%',
    borderWidth: 1,
    borderColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h4: {
    width: '20%',
    borderWidth: 1,
    borderColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
