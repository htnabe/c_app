import React, { useState, useEffect } from 'react';
import { Table, Row, Cols, TableWrapper, Col } from 'react-native-table-component';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';

export default function homeScreenProp() {
  //テーブル軸の値
  const tableHead1 = ['', '月', '火', '水', '木', '金'];
  const tableHead2 = ['1', '2', '3', '4', '5'];
  const [tableData, settableData] = useState([['Mon', '', '', '', ''], ['Tue', '', '', '', ''], ['Wed', '', '', '', ''], ['Thurs', '', '', '', ''], ['Fri', '', '', '', '']]);
  const [fakeTableData, setfakeTableData] = useState([['月', '', '', '', ''], ['1', '', '', '', ''], ['2', '', '', '', ''], ['3', '', '', '', ''], ['4', '', '', '', '']]);
  // 選ばれた講義の情報（連想配列形式）を取得
  // const selectedLectures = readTableData('tableKey');
  // テスト用データ例
  const selectedLectures = [{
    "時間割所属": "教育学部",
    "開講": "前期",
    "学年": "2 ,3 ,4",
    "曜日時限": "月1, 月2",
    "時間割コード": "M532001",
    "科目": "生活科内容構成研究",
    "担当": "川路　澄人",
    "棟名": "",
    "教室名": ""
  },
  {
    "時間割所属": "教育学部",
    "開講": "前期",
    "学年": "2 ,3 ,4",
    "曜日時限": "月3, 月4",
    "時間割コード": "M532011",
    "科目": "生活科内容構成研究",
    "担当": "川路　澄人",
    "棟名": "",
    "教室名": ""
  }];

  // 曜日・日時を判別するための配列
  const days = ['月', '火', '水', '木', '金'];
  const time = [1, 3, 5, 7, 9];

  let mondayLecs = ['Mon', '', '', '', ''];
  let tuesdayLecs = ['Mon', '', '', '', ''];
  let wednesdayLecs = ['Mon', '', '', '', ''];
  let thursdayLecs = ['Mon', '', '', '', ''];
  let fridayLecs = ['Mon', '', '', '', ''];

  function arrangeLectureData() {
    if (selectedLectures == "") {
      return;
    }

    days.forEach(day => {
      switch (day) {
        case '月':
          time.forEach(period => {
            // 月1などを正規表現で定義
            let dayTime = new RegExp(day + String(period));
            // 曜日時限の最初の二文字で判別し、mondayLecsに順番に挿入
            mondayLecs[time.indexOf(period)] = selectedLectures.filter(lecture => dayTime.test(lecture.曜日時限.slice(0, 2)))
              .map(lec => lec.科目);
            // 該当する講義が無い場合
            if (mondayLecs[time.indexOf(period)] == undefined || mondayLecs[time.indexOf(period)] == null) {
              mondayLecs[time.indexOf(period)] = '';
            }
          });
          console.log('\nmondayLecsの中身：' + mondayLecs + '\n');
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
          console.log('\ntuesdayLecsの中身：' + tuesdayLecs + '\n');
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
          console.log('\nwednesdayLecsの中身：' + wednesdayLecs + '\n');
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
          console.log('\nthursdayLecsの中身：' + thursdayLecs + '\n');
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
          console.log('\nfridayLecsの中身：' + fridayLecs + '\n');
          break;
        default:
          break;
      }
    }
    )
    settableData([mondayLecs, tuesdayLecs, wednesdayLecs, thursdayLecs, fridayLecs]);
  }

  useEffect(() => {
    const arrangeFunc = async () => {
      await new Promise(() => arrangeLectureData());
    };
    arrangeFunc();
  }, [])

  return (
    <>
    <ScrollView>
      <View style={styles.tableContainer}>
        {/* 時間割表 */}
        < View style={styles.tableall} >
          <Table borderStyle={styles.tableborder}>
              <Row data={tableHead1} textStyle={styles.table_dtext} flexArr={ [1, 2, 2, 2, 2, 2] }/>
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
    {/* 画面下(学部名表示)部分 */ }
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
    flex: 10,
    padding: 5,
    backgroundColor: '#fff',
  },
  tableborder: {
    borderWidth: 1,
    borderColor:  '#dcdcdc',
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
  // ボタンデザイン
  buttomtext: {
    textAlign: 'center',
    fontSize: 20,
  },
  buttonsita: {
    width: '40%',
    backgroundColor: '#d7e0ff',
    borderRadius: 10,
    borderColor:  '#dcdcdc',
    borderWidth: 1,
  },
})
