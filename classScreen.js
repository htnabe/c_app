import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export function classTapScreen({navigation}){
  const { 科目 }= navigation.params
  return (
    <View style={styles.container}>
      <Text>{科目}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff",
  }
})