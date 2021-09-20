import { saveGakubuName } from '../holddeta/saveData';
import { useState } from 'react';
import { Alert } from 'react-native';


export default function homeScreenProp() {
  //console.log終了+学部名保存
  const closepop1 = () => {
    try {
      // キー, '学部名, 参照するファイル名'
      saveGakubuName(['facultyName', '生物資源科学部, 生物資源, 教養教育'])
    } catch (er) {
      console.log('ファイル名：homeScreenPopup.js\n' + 'エラー：' + er + '\n');
    }
  }
  const closepop2 = () => {
    try {
      saveGakubuName(['facultyName', '総合理工学部, 総合理工, 教養教育'])
    } catch (er) {
      console.log('ファイル名：homeScreenPopup.js\n' + 'エラー：' + er + '\n');
    }
  }
  const closepop3 = () => {
    try {
      saveGakubuName(['facultyName', '人間科学部, 教養教育, 人間科学, 人間社会科学'])
    } catch (er) {
      console.log('ファイル名：homeScreenPopup.js\n' + 'エラー：' + er + '\n');
    }
  }
  const closepop4 = () => {
    try {
      saveGakubuName(['facultyName', '教育学部, 教育, 教育学, 教養教育'])
    } catch (er) {
      console.log('ファイル名：homeScreenPopup.js\n' + 'エラー：' + er + '\n');
    }
  }
  const closepop5 = () => {
    try {
      saveGakubuName(['facultyName', '法文学部, 法文, 教養教育'])
    } catch (er) {
      console.log('ファイル名：homeScreenPopup.js\n' + 'エラー：' + er + '\n');
    }
  }
  const closepop6 = () => {
    try {
      saveGakubuName(['facultyName', '人文社会学研究科, 人文社会学研究科'])
    } catch (er) {
      console.log('ファイル名：homeScreenPopup.js\n' + 'エラー：' + er + '\n');
    }
  }
  const closepop7 = () => {
    try {
      saveGakubuName(['facultyName', '教育学研究科, 教育学, 教育学_教職'])
    } catch (er) {
      console.log('ファイル名：homeScreenPopup.js\n' + 'エラー：' + er + '\n');
    }
  }
  const closepop9 = () => {
    try {
      saveGakubuName(['facultyName', '自然科学研究科, 自然科学'])
    } catch (er) {
      console.log('ファイル名：homeScreenPopup.js\n' + 'エラー：' + er + '\n');
    }
  }
  const closepop10 = () => {
    try {
      saveGakubuName(['facultyName', '総合理工研究科, 総合理工_博士後期'])
    } catch (er) {
      console.log('ファイル名：homeScreenPopup.js\n' + 'エラー：' + er + '\n');
    }
  }
  //ポップアップ画面表示切り替え
  let [co, setco] = useState(0);
  if (co == 0) {
    setco(1)
    Alert.alert(
      'はじめまして',
      'まずは所属学部・研究科を登録しましょう',
      [
        { text: '生物資源科学部', onPress: () => closepop1() },
        { text: '総合理工学部', onPress: () => closepop2() },
        { text: '人間科学部', onPress: () => closepop3() },
        { text: '教育学部', onPress: () => closepop4() },
        { text: '法文学部', onPress: () => closepop5() },
        { text: '人文社会学研究科', onPress: () => closepop6() },
        { text: '教育学研究科', onPress: () => closepop7() },
        { text: '自然科学研究科', onPress: () => closepop9() },
        { text: '総合理工研究科', onPress: () => closepop10() },
      ],
    )
  }
}
