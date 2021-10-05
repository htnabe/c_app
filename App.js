import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// スクリーンの読み込み
import SearchResult from './screens/searchResult';
import ClassDetails from './screens/classDetails';
import LectureScreen from './screens/lectureScreen'
import HomeLectureDetail from './screens/homeLectureDetail';
import EditLectureScreen from './screens/editLectureScreen';

// ナビゲーションの宣言
const Stack = createNativeStackNavigator();

//  時間割管理ホーム画面
function lectureHome() {
  const navigation = useNavigation();
  return <LectureScreen navigation={navigation} />
};

//  ホーム画面での講義情報画面
function lectureHomeDetail() {
  const navigation = useNavigation();
  return <HomeLectureDetail navigation={navigation} />
};

//  検索結果画面
function searchResultScreen() {
  const navigation = useNavigation();
  return <SearchResult navigation={navigation} />
};

//  授業詳細画面, routeについてはhttps://reactnavigation.org/docs/use-route/を参照
function classDetailScreen({ route }) {
  const navigation = useNavigation();
  return <ClassDetails navigation={navigation} lectureInfo={ route }/>
};

function editScreen() {
  const navigation = useNavigation();
  return <EditLectureScreen navigation={navigation} />
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="時間割表">
        <Stack.Screen name="時間割表" component={lectureHome} />
        <Stack.Screen name="講義詳細" component={lectureHomeDetail} />
        <Stack.Screen name="編集画面" component={editScreen} />
        <Stack.Screen name="検索結果" component={searchResultScreen} />
        <Stack.Screen name="講義の詳細" component={classDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
