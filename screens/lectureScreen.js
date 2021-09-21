import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

// 表示パーツのインポート
import HomeScreenPopup from '../screens/homeScreenPopup';
import HomeScreenTable from './classTable';


//時間割管理ホーム画面
export default function lectureScreen({ navigation }) {
  const [inputedKeyWord, setinputedLectureInfo] = useState();

  //ポップアップ
  HomeScreenPopup();
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.upper}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="授業科目検索"
            onChangeText={text => { setinputedLectureInfo(text) }}
            value={inputedKeyWord}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={styles.buttoncontainer}
          onPress={() => {
            navigation.navigate('Search_Screen', { keyWord: inputedKeyWord});
          }}
        >
          <Text style={styles.kensakutext}>検索</Text>
        </TouchableOpacity>
      </View>
      {/* テーブル部分をインポート */}
      <HomeScreenTable />
    </SafeAreaView>
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
});
