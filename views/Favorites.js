import React, {useState} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native'

import Headers from '../components/Header';

import { SearchBar } from 'react-native-elements';



const Favorites = ({ navigation }) => {

    const [search, updateSearch] = useState('');

    return (
        <View style={styles.container}>
        <View style={styles.body}>
            <Headers />
            <Text style={styles.favorite}>Favorites</Text> 
        </View>
        <SearchBar platform ='ios' placeholder = 'Search ...' round='true'
        onChangeText={updateSearch} value={search} />
    </View>
    )
}

const styles = StyleSheet.create({
    favorite: {
        fontFamily:'Didot-Bold',
        fontSize:23,
        textAlign:'center',
        margin:10,
    }
})

export default Favorites