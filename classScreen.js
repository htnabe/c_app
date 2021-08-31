import  React,  { useState } from 'react';
import { SafeAreaView ,StyleSheet ,Button, View, Text ,TextInput, Modal, TouchableOpacity, Animated, Dimensions, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Table, Row, Rows,TableWrapper, Col  } from 'react-native-table-component';


//講義名をタップ画面
export function ClasstapScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.container} >
  
        <View style={styles.c_component}>
          <Text style={{fontSize:30}}>講義名</Text>
          <Text style={{fontSize:30}}>微生物実験</Text>
        </View>
  
        <View style={styles.c_component}>
          <Text style={{fontSize:30}}>担当者名</Text>
          <Text style={{fontSize:30}}>島根太郎</Text>
        </View>
  
        <View style={styles.c_component}>
          <Text style={{fontSize:30}}>曜日</Text>
          <Text style={{fontSize:30}}>月1・月2</Text>
        </View>
  
        <View style={styles.c_component}>
          <Text style={{fontSize:30}}>時限</Text>
  
          <Text style={{fontSize:30}}>1・2</Text>
        </View>
  
        <View style={styles.c_component}>
          <Text style={{fontSize:30}}>教室</Text>
          <Text style={{fontSize:30}}>大学ホール</Text>
        </View>
  
        <View style={{width:'100%',flex: 1,alignItems:'center'}}>
          <View style={{flex: 1,width:"30%", borderWidth:2,borderColor: "black",backgroundColor:"#d7e0ff",borderRadius:10, padding:10,justifyContent:'center'}} >
            <Button title='追加' onPress={() => navigation.navigate('Search_Screen')} />
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
    c_component: {
      justifyContent:'center',
      alignItems:'center',
      marginVertical:25,
      flex:1,
    },
});

export default ClasstapScreen;