import { saveGakubuName } from '../holddeta/savedeta';
import { Alert } from 'react-native';
import  React,  { useState } from 'react';


export default function homeScreenProp() {
  //alert終了+学部名保存
const closepop1 =() => {
    try {
      saveGakubuName(['Gakubuname','生物資源科学部'])
      
    }catch(er) {
      alert(er)
    }
  }
  const closepop2 =() => {
    try {
      saveGakubuName(['Gakubuname','総合理工学部'])
      
    }catch(er) {
      alert(er)
    }
  }
  const closepop3 =() => {
    try {
      saveGakubuName(['Gakubuname','人間科学部'])
      
    }catch(er) {
      alert(er)
    }
  }
  const closepop4 =() => {
    try {
      saveGakubuName(['Gakubuname','教育学部'])
      
    }catch(er) {
      alert(er)
    }
  }
  const closepop5 =() => {
    try {
      saveGakubuName(['Gakubuname','法文学部'])
      
    }catch(er) {
      alert(er)
    }
  }
  const closepop6 =() => {
    try {
      saveGakubuName(['Gakubuname','人文社会学研究科'])
      
    }catch(er) {
      alert(er)
    }
  }
  const closepop7 =() => {
    try {
      saveGakubuName(['Gakubuname','教育学研究科'])
      
    }catch(er) {
      alert(er)
    }
  }
  const closepop8 =() => {
    try {
      saveGakubuName(['Gakubuname','医学系研究科'])
      
    }catch(er) {
      alert(er)
    }
  }
  const closepop9 =() => {
    try {
      saveGakubuName(['Gakubuname','自然科学研究科'])
      
    }catch(er) {
      alert(er)
    }
  }
  const closepop10 =() => {
    try {
      saveGakubuName(['Gakubuname','総合理工研究科'])
      
    }catch(er) {
      alert(er)
    }
  }
  //ポップアップ画面表示切り替え
  let [co,setco] = useState(0);
  if(co == 0) {
    setco(1)
    Alert.alert(
      'はじめまして',
      'まずは所属学部・研究科を登録しましょう',
      [
        {text: '生物資源科学部', onPress: () => closepop1()},
        {text: '総合理工学部', onPress: () => closepop2()},
        {text: '人間科学部', onPress: () => closepop3()},
        {text: '教育学部', onPress: () => closepop4()},
        {text: '法文学部', onPress: () => closepop5()},
        {text: '人文社会学研究科', onPress: () => closepop6()},
        {text: '教育学研究科', onPress: () => closepop7()},
        {text: '医学系研究科', onPress: () => closepop8()},
        {text: '自然科学研究科', onPress: () => closepop9()},
        {text: '総合理工研究科', onPress: () => closepop10()},
      ],
    )
  }
}

