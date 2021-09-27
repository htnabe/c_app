import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

// 表示パーツのインポート
import HomeScreenPopup from '../screens/homeScreenPopup';
import HomeScreenTable from './classTable';


//時間割管理ホーム画面
export default function lectureScreen({ navigation }) {
  const [inputedKeyWord, setinputedLectureInfo] = useState();

  return (
    <View style={styles.container}>
      <HomeScreenPopup />
      <View style={styles.upper}>
          <TextInput
            style={styles.input}
            placeholder="授業科目検索"
            onChangeText={text => { setinputedLectureInfo(text) }}
            value={inputedKeyWord}
          >
          </TextInput>
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
      <View style={styles.bottom}>
        <HomeScreenTable />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  upper: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    flex: 6,
  },
  // 検索ボタン関連
  input: {
    flex: 2,
    marginHorizontal: '1%',
    borderWidth: 1,
    color: 'black',
    fontSize: 20,
    borderColor:  '#cccccc',
    borderRadius: 10,
    padding: 12,
  },
  buttoncontainer: {
    flex: 1,
    marginHorizontal: '1%',
    borderWidth: 1,
    borderColor: "#dcdcdc",
    backgroundColor: "#d7e0ff",
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  kensakutext: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold'
  },
});
