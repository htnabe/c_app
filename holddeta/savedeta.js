import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//データの保存
export async function saveGakubuName(dp) {
  
  try {
    let dp_Key = dp[0];
    alert(dp_Key)
    let dp_Value = dp[1];

    await AsyncStorage.setItem(dp_Key, dp_Value);
    alert('保存成功')
  } catch (error) {
    alert(error)
  }
}





