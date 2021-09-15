import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Alert, TouchableHighlight } from 'react-native';
import { CheckBox } from 'react-native-elements';


export default function renderItems() {

    const [data, setChecked] = useState(false);

    const Item = ({ 時間割所属, 科目, 担当 }) => (
        <View style={styles.itemSearch}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.id}>{時間割所属}</Text>
                <Text style={styles.title}>{科目}</Text>
                <Text style={styles.teacher}>{担当}</Text>
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row' }}>
            <TouchableHighlight style={{ width: '90%' }} onPress={() => navigation.navigate("Classtap_Screen", item)}>
                <Item 時間割所属={item.時間割所属} 科目={item.科目} 担当={item.担当} />
            </TouchableHighlight>
            <View style={{ justifyContent: 'center', borderWidth: 1, }}>
                <CheckBox
                    checked={data}
                    onPress={() => setChecked(!data)}
                    style={{ alignItems: 'center' }}
                />
            </View>
        </View>
    );

    return (
        <>
            <FlatList
                data={d1_Data}
                renderItem={renderItem}
                extraData={data}
                keyExtractor={item => item.時間割コード}
                style={styles.flatlist}
            />
        </>
    )
}

const styles = StyleSheet.create({
    itemSearch: {
        backgroundColor: '#b0caf9',
        padding: 20,
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row'
    },
    id: {
        fontSize: 15,
        fontWeight: 'bold',
        width: '20%',
    },
    title: {
        fontSize: 15,
        width: '50%',
    },
    teacher: {
        fontSize: 15,
        width: '20%',
    },


})