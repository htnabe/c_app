import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';


const d1_Data = require('./assets/firstSemisterLecs/教育.json');

const Item = ({ 時間割所属, 科目, 担当}) => (
  <View style={styles.item}>
    <Text style={styles.id}>{時間割所属}</Text>
    <Text style={styles.title}>{科目}</Text>
    <Text style={styles.teacher}>{担当}</Text>
  </View>
);


export function searchScreen({navigation}) {

    const renderItem = ({ item }) => (
      <TouchableHighlight onPress={() => navigation.navigate("Classtap_Screen",科目)} underlayColor={'red'}>
          <Item 時間割所属={item.時間割所属} 科目={item.科目} 担当={item.担当}/>
      </TouchableHighlight>
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.searchHeader}>
          <View style={styles.h1}>
            <Text style={styles.headerText}>所属</Text>
          </View>
          <View style={styles.h2}>
            <Text style={styles.headerText}>科目</Text>
          </View>
          <View style={styles.h3}>
            <Text style={styles.headerText}>担当</Text>
          </View>
        </View>
        <FlatList
          data={d1_Data}
          renderItem={renderItem}
          keyExtractor={item => item.時間割コード}
          style={styles.flatlist}
        />
        <Text></Text>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    containerSearch: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    itemSearch: {
      backgroundColor: '#b0caf9',
      padding: 20,
      borderWidth:1,
      borderColor:'black',
      marginHorizontal: 1,
      flexDirection:'row'
    },
    searchHeader: {
      flexDirection:'row',
    },
    h1: {
      width:'20%',
      borderWidth:2,
      borderColor:'black',
      alignItems:'center',
      justifyContent:'center',
    },
    h2: {
      width:'50%',
      borderWidth:2,
      borderColor:'black',
      alignItems:'center',
      justifyContent:'center',
    },
    h3: {
      width:'30%',
      borderWidth:2,
      borderColor:'black',
      alignItems:'center',
      justifyContent:'center',
    },
    headerText: {
      marginVertical:10,
      fontSize:20,
      fontWeight:'bold',
    },
    id: {
      fontSize:15,
      fontWeight:'bold',
      width:'20%',
    },
    title: {
      fontSize: 15,
      width:'55%',
    },
    teacher: {
      fontSize:15,
      width:'25%',
    }
  });