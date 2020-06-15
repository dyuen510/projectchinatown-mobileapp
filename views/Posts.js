import React, {useState} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
} from 'react-native'

import { SearchBar } from 'react-native-elements';

import Headers from '../components/Header';


const Posts = ({ navigation }) => {
    const [search, updateSearch] = useState('');
        return (
            <View style={styles.container}>
            <View style={styles.body}>
                <Headers />
                <Text style={styles.posts}>Classified Posts</Text>
            </View>
            <SearchBar platform ='ios' placeholder = 'Search ...' round='true'
            onChangeText={updateSearch} value={search} />
            <TouchableOpacity style={styles.button}>
            <Text>Create a Post</Text>
            </TouchableOpacity>
        </View>
        )
    }
    
    const styles = StyleSheet.create({
        button:{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            padding: 10
        },
        posts: {
            fontFamily:'Didot-Bold',
            fontSize:23,
            textAlign:'center',
            margin:10,
        }
    })
    

export default Posts