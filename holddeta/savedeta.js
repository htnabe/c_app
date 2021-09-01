import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



//学部入力を完了したかの有無(true or false)データのセーブ
export async function inputGakubudeta(dp) {

  try {
    
    let stringdp = String(dp);
    await AsyncStorage.setItem('GakubuInput', stringdp);

  } catch (error) {
    
    alert(error)

  }
}

//学部名データの保存
export async function saveGakubuName(dp) {
    alert('ポイント２')
  try {

    let stringdp = String(dp);
    //alert(dp)
    await AsyncStorage.setItem('Gakubuname', stringdp);
    alert('保存成功')

  } catch (error) {
    alert(error)
  }
}





