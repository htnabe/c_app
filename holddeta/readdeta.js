import React from 'react';
import AsyncStorage from 'react-native';



//データの読み出し
export const readdeta = async () => {
    try {
        const deta_r1 = await AsyncStorage.getItem(DATA);
        if(deta_r1) {
            this.setState({deta_r1: deta_r1});
        }
    } catch (e) {
        //console.log(e2)
    }
}