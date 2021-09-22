import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

//授業詳細画面
export default function classDetails({ navigation, lectureInfo }) {
  const { 科目 } = lectureInfo.params;
  const { 担当 } = lectureInfo.params;
  const { 教室名 } = lectureInfo.params;
  let balnkClass = null;
  if (教室名 == '') {
    balnkClass = '未定またはオンライン講義です';
  } else {
    balnkClass = 教室名;
  }

  return (
    <ScrollView>
    <View style={styles.containerClass}>
      <View style={styles.classTapframe}>
        <Text style={styles.classTapHeader}>講義名</Text>
        <Text style={styles.classTapText}>{科目}</Text>
      </View>
      <View style={styles.classTapframe}>
        <Text style={styles.classTapHeader}>担当者</Text>
        <Text style={styles.classTapText}>{担当}</Text>
      </View>
      <View style={styles.classTapframe}>
        <Text style={styles.classTapHeader}>曜日・時限</Text>
        <Text style={styles.classTapText}>あとで調整</Text>
      </View>
      <View style={styles.classTapframe}>
        <Text style={styles.classTapHeader}>教室名</Text>
        <Text style={styles.classTapText}>{balnkClass}</Text>
      </View>
      <View style={styles.ctTuikaContainer}>
        <TouchableOpacity style={styles.ctTuikaBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.ctTuikaBtnText}>戻る</Text>
        </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  // 全体のコンテナ
  containerClass: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 各情報について
  classTapframe: {
    width: '100%',
    backgroundColor: '#78bbc7',
  },
  classTapHeader: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
  },
  classTapText: {
    padding: 5,
    textAlign: 'center',
    width: '100%',
    fontSize: 22,
    backgroundColor: '#e6f2f5',
    color: 'black',
  },
  // 追加ボタン関連
  ctTuikaContainer: {
    width: '30%',
    alignItems: 'center',
    marginTop: 30,
  },
  ctTuikaBtn: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dcdcdc',
    backgroundColor: '#78bbc7'
  },
  ctTuikaBtnText: {
    paddingRight: 30,
    paddingLeft: 30,
    paddingVertical: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  }
});
