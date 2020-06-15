import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native';

import { SearchBar } from 'react-native-elements';

const Support = () => {
    const [search, updateSearch] = useState('');
    
    return(
        <View style = {styles.container}>
        <View style = {styles.body}>
            <Text style ={styles.support}>Support Our Businesses</Text>
        </View>
        <SearchBar platform ='ios' placeholder = 'Find Businesses' round='true'
        onChangeText={updateSearch} value={search} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomColor:'gray',
        borderBottomWidth: 1,
        alignItems:'center',
    },
    support: {
        fontFamily:'Noteworthy-bold',
        fontSize: 20,
        // fontWeight:'bold',
        padding:8,
        justifyContent:'center',
    },
})

export default Support;