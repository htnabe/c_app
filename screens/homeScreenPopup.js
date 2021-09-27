import { saveGakubuName } from '../holddeta/saveData';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, Modal, Pressable, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

function storeFacultyData(facultyName) {
  try {
    switch (facultyName) {
      case '生物資源科学部':
        // キー, '学部名, 参照するファイル名'
        saveGakubuName(['facultyName', '生物資源科学部, 生物資源, 教養教育']);
        break;
      case '総合理工学部':
        saveGakubuName(['facultyName', '総合理工学部, 総合理工, 教養教育'])
        break;
      case '人間科学部':
        saveGakubuName(['facultyName', '人間科学部, 教養教育, 人間科学, 人間社会科学'])
        break;
      case '教育学部':
        saveGakubuName(['facultyName', '教育学部, 教育, 教育学, 教養教育'])
        break;
      case '法文学部':
        saveGakubuName(['facultyName', '法文学部, 法文, 教養教育'])
        break;
      case '人文社会学研究科':
        saveGakubuName(['facultyName', '人文社会学研究科, 人文社会学研究科'])
        break;
      // 訂正要
      case '人間社会科学研究科':
        saveGakubuName(['facultyName', '人文社会学研究科, 人文社会学研究科'])
        break;
      case '教育学研究科':
        saveGakubuName(['facultyName', '教育学研究科, 教育学, 教育学_教職'])
        break;
      case '総合理工学研究科':
        saveGakubuName(['facultyName', '総合理工研究科, 総合理工_博士後期'])
        break;
      case '自然科学研究科':
        saveGakubuName(['facultyName', '自然科学研究科, 自然科学'])
        break;
      default:
        break;
    }
  } catch (error) {
    console.log('ファイル名：homeScreenPopup.js\n' + 'エラー：' + er + '\n');
  }
};

export default function homeScreenProp() {
  const [modalVisible, setModalVisible] = useState(true);
  const [facultyTableData, setfacultyTableData] = useState([]);
  const facultyNameArray = ['生物資源科学部', '総合理工学部', '人間科学部', '教育学部', '法文学部', '人文社会学研究科',
    '人間社会科学研究科', '教育学研究科', '総合理工学研究科', '自然科学研究科'];

  const facultyButton = (passedName) => {
    return (
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => { setModalVisible(!modalVisible); storeFacultyData(passedName); }}
      >
        <Text style={styles.textStyle}>{passedName}</Text>
      </Pressable>
    )
  }

  useEffect(() => {
    const facultyNameElement = facultyNameArray.map(item => facultyButton(item));
    setfacultyTableData(facultyNameElement);
  }, [])

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("所属先は必ず選んでください");
          setModalVisible(true);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>はじめまして</Text>
            <Text style={styles.modalText}>所属先を選んでください</Text>
            <ScrollView>
              <Table>
                <TableWrapper>
                  <Col data={facultyTableData} />
                </TableWrapper>
              </Table>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: '5%',
    marginVertical: '10%',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
