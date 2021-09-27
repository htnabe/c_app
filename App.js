import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// スクリーンの読み込み
import SearchResult from './screens/searchResult';
import ClassDetails from './screens/classDetails';
import LectureScreen from './screens/lectureScreen'
import HomeLectureDetail from './screens/homeLectureDetail';

// ナビゲーションの宣言
const Stack = createNativeStackNavigator();

//  時間割管理ホーム画面
function lectureHome() {
  const navigation = useNavigation();
  return <LectureScreen navigation={navigation} />
};

//  ホーム画面用講義情報画面
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home_Screen">
        <Stack.Screen name="Home_Screen" component={lectureHome} />
        <Stack.Screen name="Home_LectureInfo" component={lectureHomeDetail} />
        <Stack.Screen name="Search_Screen" component={searchResultScreen} />
        <Stack.Screen name="Classtap_Screen" component={classDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
