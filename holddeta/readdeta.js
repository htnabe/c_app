import React from 'react';
import AsyncStorage, { Alert } from 'react-native';



//データの読み出し
export async function readdeta() {

    const gbi = await AsyncStorage.getItem('Gakubuname');
  
    try {

      if (gbi != null) {
        return gbi;
      }else{
        return "";
      }

    } catch (error) {

    　alert('エラー発生')
      alert(error)
      
    }
  }