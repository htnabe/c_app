//import AsyncStorage, { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//データの読み出し
export async function readdeta(rd) {

    const gbi = await AsyncStorage.getItem({rd});
  
    try {
      if (gbi != null) {
        alert('読み出し成功')
        return gbi;
      }else{
        alert('値無し')
        return "";
      }
    } catch (error) {
    　alert('エラー発生')
      alert(error)
    }
  }