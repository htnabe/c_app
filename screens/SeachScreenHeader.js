import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableHighlight } from 'react-native';
import { CheckBox } from 'react-native-elements';


export default function SeachScreenHeader() {
    return (
        <>
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
                <View style={styles.h4}>
                    <Text style={styles.headerText}>追加</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    searchHeader: {
        flexDirection: 'row',
    },
    headerText: {
        marginVertical: 15,
        fontSize: 20,
        fontWeight: 'bold',
    },
    h1: {
        width: '20%',
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h2: {
        width: '40%',
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h3: {
        width: '20%',
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h4: {
        width: '20%',
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
})