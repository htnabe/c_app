import AsyncStorage from '@react-native-async-storage/async-storage';

//データの保存
export async function saveGakubuName(dp) {
  try {
    const dp_Key = dp[0];
    const dp_Value = dp[1];
    await AsyncStorage.setItem(dp_Key, dp_Value);
    console.log('ファイル名：saveData.js\n' + "ログ：保存成功\n" + 'キー：' + dp_Key + '\n' + '内容：' + dp_Value  +'\n');
  } catch (error) {
    console.log("ファイル名：saveData.js\n" + "エラー：" + error);
  }
}
