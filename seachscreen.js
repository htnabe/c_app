import  React,  { useState } from 'react';
import { SafeAreaView ,StyleSheet ,Button, View, Text ,Checkbox, TouchableOpacity, Animated, Dimensions, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Table, Row, Rows,TableWrapper, Col  } from 'react-native-table-component';

//検索結果表示画面
export function SearchScreen() {

    const K_tableHead = ['','講義名', '担当者名', '追加'];
    const K_tabletitle = ['1', '2', '3', '4','5'];
    const K_tableData = [
      ['1', '2', '□'],
      ['1', '2', '□'],
      ['1', '2', '□'],
      ['1', '2', '□'],
      ['1', '2', '□'],
    ];
    
    return (
      <SafeAreaView style={styles.container}>

          

            {/* <Checkbox value={box_1_value} onChange={() => setCvlaue(true)}></Checkbox> */}
  
  
            <View style={{flex:7,backgroundColor:"#fff",width:"100%"}}>
              <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
                <Row data={K_tableHead} textStyle={styles.table_dtext} flexArr={[1, 1.5, 1.5, 1]}/>
                <TableWrapper style={styles.tablewrapper}>
                  <Col data={K_tabletitle} style={styles.tabletitle} textStyle={styles.table_dtext}/>
                  <Rows data={K_tableData} flexArr={[1.5, 1.5, 1]} textStyle={styles.table_itext}/>
                </TableWrapper>
              </Table>
            </View>
  
            <View style={{width:'100%',flex: 1,alignItems:'flex-end'}}> 
              <View style={{borderWidth:2,borderColor: "black",borderRadius:10,padding:5,width:'30%', backgroundColor:"#d7e0ff"}}>
                <Button title="追加" onPress={() => navigation.navigate('Home_Screen')} />
              </View>
            </View>
            
            <View style={{width:'100%',flex: 1,alignItems:'flex-end'}}> 
              <View style={{flex: 1,width:"70%", borderColor: "black",backgroundColor:"#d7e0ff",borderRadius:10, padding:10}}>
                <Button title="Classtap_screenへの遷移" onPress={() => navigation.navigate('Classtap_Screen')} />
              </View>
            </View>
        
      </SafeAreaView>
    );
  }


  const styles = StyleSheet.create({
    container: {
        flex:1,
        //height:HEIGHT,
        backgroundColor:'#fff',
    },
    tableall: {
      width: "100%",
      flex:8,
      paddingTop: 10, 
      backgroundColor: '#fff',
    },
    tablehead: {
      backgroundColor: 'red'
    },
    tablewrapper: {
       flexDirection: 'row' ,
    },
    tabletitle: {
       backgroundColor: '#d7e0ff',
    },
    table_dtext: {
      fontSize:25,
      paddingVertical:30,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    table_itext: {
      fontSize:23,
      paddingVertical:35,
      textAlign: 'center'
    },
});