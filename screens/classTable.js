import React, { useState } from 'react';
import { Table, Row, Rows, TableWrapper, Col } from 'react-native-table-component';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { saveData } from '../holddeta/saveData';
import { readTableData } from '../holddeta/readTableData';


export default function homeScreenProp({ route }) {

    //所属学部
    const [gakubuValue, setGakubuValue] = useState('hello shimane')

    //テーブルに表示するデータ
    const [firstPeriod, setFirstPeriod] = useState([{ '月1,2': '1' }, { '火1,2': '2' }, { '水1,2': '3' }, { '木1,2': '4' }, { '金1,2': '5' }]);
    const [secondPeriod, setSecondPeriod] = useState([{ '月3,4': '1' }, { '火3,4': '2' }, { '水3,4': '3' }, { '木3,4': '4' }, { '金3,4': '5' }]);
    const [thirdPeriod, setThirdPeriod] = useState([{ '月5,6': '1' }, { '火5,6': '2' }, { '水5,6': '3' }, { '木5,6': '4' }, { '金5,6': '5' }]);
    const [forthPeriod, setForthPeriod] = useState([{ '月7,8': '1' }, { '火7,8': '2' }, { '水7,8': '3' }, { '木7,8': '4' }, { '金7,8': '5' }]);
    const [fivePeriod, setFivePeriod] = useState([{ '月9,10': '1' }, { '火9,10': '2' }, { '水9,10': '3' }, { '木9,10': '4' }, { '金9,10': '5' }]);
    const [selectedAll_LData, setSelectedAllData] = useState([{ '1,2時限': '' }, { '3,4時限': '' }, { '5,6時限': '' }, { '7,8時限': '' }, { '9,10時限': '' }]);

    //データの振り分け
    for (let extractData in route) {


    }

    //asyncstorage()にデータを渡す
    //saveData(['selectedAll_LData', selectedAll_LData])

    //データの呼び出し
    //const showTableData = readTableData('selectedAll_LData');

    const [D1, setD1] = useState('');
    const [D2, setD2] = useState("汽水域生態学");
    const [D3, setD3] = useState("生命情報学");
    const [D4, setD4] = useState("微生物実験");
    const [D5, setD5] = useState("島根学");

    //テーブルにおける軸の値
    const tableHead1 = ['', '月', '火', '水', '木', '金'];
    const tableHead2 = ['1限', '2限', '3限', '4限', '5限'];

    const tableData = [
        [D1, '2', '3', '4', '5'],
        [D2, '2', '3', '4', '5'],
        [D3, '2', '3', '4', '5'],
        [D4, '2', '3', '4', '5'],
        [D5, '2', '3', '4', '5'],
    ];

    return (
        <>
            {/* 時間割表 */}
            < View style={styles.tableall} >
                <Table borderStyle={styles.tableborder}>
                    <Row data={tableHead1} style={styles.tableHead} textStyle={styles.table_dtext} />
                    <TableWrapper style={styles.tablewrapper}>
                        <Col data={tableHead2} style={styles.tabletitle} textStyle={styles.table_titletext} />
                        <Rows data={tableData} flexArr={[1, 1, 1, 1, 1]} textStyle={styles.table_itext} numberOfLines={1} ellipsizeMode={'tail'} />
                    </TableWrapper>
                </Table>
            </View >

            {/* 画面下(学部名表示)部分 */}
            < View style={styles.bottom_horizen} >
                <View style={styles.buttomwaku}>
                    <Text style={styles.buttomwakutext}>{gakubuValue}</Text>
                </View>
                <TouchableOpacity style={styles.buttonsita} onPress={() => alert('aaa')}>
                    <Text style={styles.buttomtext}>編集</Text>
                </TouchableOpacity>
            </View >
        </>)
}

const styles = StyleSheet.create({
    tableall: {
        width: "100%",
        flex: 8,
        paddingTop: 20,
        backgroundColor: '#fff',
    },
    tableborder: {
        borderWidth: 2,
        borderColor: 'black',
    },
    table_dtext: {
        fontSize: 25,
        paddingVertical: '10%',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    tablewrapper: {
        flexDirection: 'row',
    },
    tabletitle: {
        backgroundColor: '#d7e0ff',
    },
    table_titletext: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    table_itext: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingVertical: '65%',
        textAlign: 'center',
    },
    bottom_horizen: {
        flexDirection: 'row',
        width: '100%',
        flex: 1,
    },
    buttomwaku: {
        color: 'black',
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#d7e0ff',
        borderRadius: 10,
        marginLeft: 40,
        marginRight: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttomwakutext: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        paddingHorizontal: 5,
    },
    buttomtext: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonsita: {
        backgroundColor: '#d7e0ff',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    }



})
