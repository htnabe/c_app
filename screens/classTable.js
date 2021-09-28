import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Table, Row, Cols, TableWrapper, Col } from 'react-native-table-component';
import { StyleSheet, View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function homeScreenProp() {
  const navigation = useNavigation();

  //テーブル軸の値などの初期化
  const tableHead1 = ['', '月', '火', '水', '木', '金'];
  const tableHead2 = ['1', '2', '3', '4', '5'];
  let mondayLecs = new Array(5);
  let tuesdayLecs = new Array(5);
  let wednesdayLecs = new Array(5);
  let thursdayLecs = new Array(5);
  let fridayLecs = new Array(5);
  const [tableData, settableData] = useState([mondayLecs, tuesdayLecs, wednesdayLecs, thursdayLecs, fridayLecs]);
  let flatlistItem = new Array;
  const [flatlistData, setflatlistData] = useState();

  // 曜日・日時を判別するための配列
  const days = ['月', '火', '水', '木', '金', '他'];
  const time = [1, 3, 5, 7, 9];

  // 選ばれた講義の情報（連想配列形式）を取得
  // const selectedLectures = readTableData('tableKey');
  // テスト用データ例
  const selectedLectures = [{
    "時間割所属": "教育学部",
    "開講": "前期",
    "学年": "2 ,3 ,4",
    "曜日時限": "月1, 月2",
    "時間割コード": "M532001",
    "科目": "テストデータ１",
    "担当": "川路　澄人",
    "棟名": "",
    "教室名": ""
  },
  {
    "時間割所属": "教育学部",
    "開講": "前期",
    "学年": "2 ,3 ,4",
    "曜日時限": "月3, 月4",
    "時間割コード": "M1011",
    "科目": "めちゃくちゃ長い授業目",
    "担当": "川路　澄人",
    "棟名": "",
    "教室名": ""
  },
  {
    "時間割所属": "教育学部",
    "開講": "前期",
    "学年": "2 ,3 ,4",
    "曜日時限": "他",
    "時間割コード": "M56011",
    "科目": "集中1",
    "担当": "川路　澄人",
    "棟名": "テスト",
    "教室名": ""
  },
  {
    "時間割所属": "教育学部",
    "開講": "前期",
    "学年": "2 ,3 ,4",
    "曜日時限": "他",
    "時間割コード": "M5111",
    "科目": "集中2",
    "担当": "川路　澄人",
    "棟名": "テスト",
    "教室名": ""
  },
  ];

  const navigatoToDetailScreen = (lectureName) => {
    // lectureDataは配列
    const lectureData = selectedLectures.filter(item => item.科目 == lectureName);
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Home_LectureInfo", lectureData[0])}>
        <Text>{lectureName}</Text>
      </TouchableOpacity>
    );
  }

  function arrangeLectureData() {
    if (selectedLectures == "") {
      return;
    }

    days.forEach(day => {
      switch (day) {
        case '月':
          time.forEach(period => {
            // "月1"などを正規表現で定義
            let dayTime = new RegExp(day + String(period));
            // 曜日時限の最初の二文字で判別し、mondayLecsに順番に挿入
            mondayLecs[time.indexOf(period)] = selectedLectures.filter(lecture => dayTime.test(lecture.曜日時限.slice(0, 2)))
              .map(lec => lec.科目);
            // 該当する講義が無い場合
            if (mondayLecs[time.indexOf(period)] == undefined || mondayLecs[time.indexOf(period)] == null) {
              mondayLecs[time.indexOf(period)] = '';
            }
            else if (mondayLecs[time.indexOf(period)] != '') {
              mondayLecs[time.indexOf(period)] = navigatoToDetailScreen(mondayLecs[time.indexOf(period)]);
            }
          });
          break;
        case '火':
          time.forEach(period => {
            // 月1などを正規表現で定義
            let dayTime = new RegExp(day + String(period));
            // 曜日時限の最初の二文字で判別し、mondayLecsに順番に挿入
            tuesdayLecs[time.indexOf(period)] = selectedLectures.filter(lecture => dayTime.test(lecture.曜日時限.slice(0, 2)))
              .map(lec => lec.科目);
            // 該当する講義が無い場合
            if (tuesdayLecs[time.indexOf(period)] == undefined || mondayLecs[time.indexOf(period)] == null) {
              tuesdayLecs[time.indexOf(period)] = '';
            }
          });
          break;
        case '水':
          time.forEach(period => {
            // 月1などを正規表現で定義
            let dayTime = new RegExp(day + String(period));
            // 曜日時限の最初の二文字で判別し、mondayLecsに順番に挿入
            wednesdayLecs[time.indexOf(period)] = selectedLectures.filter(lecture => dayTime.test(lecture.曜日時限.slice(0, 2)))
              .map(lec => lec.科目);
            // 該当する講義が無い場合
            if (wednesdayLecs[time.indexOf(period)] == undefined || mondayLecs[time.indexOf(period)] == null) {
              wednesdayLecs[time.indexOf(period)] = '';
            }
          });
          break;
        case '木':
          time.forEach(period => {
            // 月1などを正規表現で定義
            let dayTime = new RegExp(day + String(period));
            // 曜日時限の最初の二文字で判別し、mondayLecsに順番に挿入
            thursdayLecs[time.indexOf(period)] = selectedLectures.filter(lecture => dayTime.test(lecture.曜日時限.slice(0, 2)))
              .map(lec => lec.科目);
            // 該当する講義が無い場合
            if (thursdayLecs[time.indexOf(period)] == undefined || mondayLecs[time.indexOf(period)] == null) {
              thursdayLecs[time.indexOf(period)] = '';
            }
          });
          break;
        case '金':
          time.forEach(period => {
            // 月1などを正規表現で定義
            let dayTime = new RegExp(day + String(period));
            // 曜日時限の最初の二文字で判別し、mondayLecsに順番に挿入
            fridayLecs[time.indexOf(period)] = selectedLectures.filter(lecture => dayTime.test(lecture.曜日時限.slice(0, 2)))
              .map(lec => lec.科目);
            // 該当する講義が無い場合
            if (fridayLecs[time.indexOf(period)] == undefined || mondayLecs[time.indexOf(period)] == null) {
              fridayLecs[time.indexOf(period)] = '';
            }
          });
          break;
        case '他':
          // '他'を正規表現で定義
          let dayTime = new RegExp(day);
          flatlistItem = selectedLectures.filter(lecture => dayTime.test(lecture.曜日時限))
            .map(lec => lec);
          // 該当する講義が無い場合
          if (flatlistItem == undefined || flatlistItem == null) {
            flatlistItem = [];
          }
          break;
        default:
          break;
      }
    }
    )
    settableData([mondayLecs, tuesdayLecs, wednesdayLecs, thursdayLecs, fridayLecs]);
    setflatlistData(flatlistItem);
  }

  useEffect(() => {
    const arrangeFunc = async () => {
      await new Promise(() => arrangeLectureData());
    };
    arrangeFunc();
  }, [])

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
      <TouchableHighlight style={{ width: '80%' }} onPress={() => navigation.navigate("Classtap_Screen", item)}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.otherLectureText}>{item.科目}</Text>
            <Text style={styles.otherLectureText}>{item.担当}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );

  return (
    <>
      <ScrollView>
        <View style={styles.tableContainer}>
          {/* 時間割表 */}
          < View style={styles.tableall} >
            <Table borderStyle={styles.tableborder}>
              <Row data={tableHead1} textStyle={styles.table_dtext} flexArr={[1, 2, 2, 2, 2, 2]} />
              <TableWrapper style={{ flexDirection: 'row' }}>
                <TableWrapper style={styles.tableLeftwrapper}>
                  <Col data={tableHead2} style={styles.tableSideTitle} textStyle={styles.table_titletext} heightArr={[80, 80, 80, 80, 80]} />
                </TableWrapper>
                <TableWrapper style={styles.tableRightwrapper}>
                  <Cols data={tableData} style={styles.tableContent} textStyle={styles.table_itext} heightArr={[80, 80, 80, 80, 80]} />
                </TableWrapper>
              </TableWrapper>
            </Table>
          </View >
        </View>
      </ScrollView>
      <View style={styles.otherLectures}>
        <Text style={styles.otherLectureTitle}>集中講義など</Text>
        <FlatList
          data={flatlistData}
          renderItem={renderItem}
          keyExtractor={item => item.時間割コード}
        />
      </View>
      {/* 画面下(学部名表示)部分 */}
      <TouchableOpacity style={styles.buttonsita}>
        <Text style={styles.buttomtext}>編集</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  tableContainer: {
  },
  tableall: {
    padding: 5,
    backgroundColor: '#fff',
  },
  tableborder: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
  table_dtext: {
    fontSize: 20,
    paddingVertical: '5%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableLeftwrapper: {
    flex: 1,
  },
  tableRightwrapper: {
    flex: 10,
  },
  tableSideTitle: {
    flex: 1,
    backgroundColor: '#167F92',
  },
  tableContent: {
    flex: 5,
  },
  table_titletext: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  table_itext: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // 集中講義部分のデザイン
  otherLectures: {
    alignItems: 'center',
    marginHorizontal: '2%',
    marginBottom: '4%',
  },
  otherLectureText: {
    marginHorizontal: '5%',
    fontSize: 16,
  },
  otherLectureTitle: {
    fontSize: 20,
    marginBottom: '2%',
  },
  // ボタンデザイン
  buttomtext: {
    textAlign: 'center',
    fontSize: 20,
  },
  buttonsita: {
    marginBottom: '2%',
    marginHorizontal: '5%',
    width: '40%',
    backgroundColor: '#d7e0ff',
    borderRadius: 10,
    borderColor: '#dcdcdc',
    borderWidth: 1,
  },
})
