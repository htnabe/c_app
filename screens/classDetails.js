import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

//授業詳細画面
export default function classDetails({ navigation, lectureInfo }) {
  const { 科目 } = lectureInfo.params
  const { 担当 } = lectureInfo.params
  const { 教室名 } = lectureInfo.params
  let balnkClass = null;
  if (教室名 == '') {
    balnkClass = 'データがありません';
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
        <Text style={styles.classTapHeader}>担当者名</Text>
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
          <Text style={styles.ctTuikaBtnText}>追加</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
