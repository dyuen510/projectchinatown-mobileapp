import React, {useState} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Button,
    FlatList,
    TouchableOpacity,
} from 'react-native'


import Headers from '../components/Header';
import { createStackNavigator } from 'react-navigation-stack'
import { round } from 'react-native-reanimated';
import { withTheme } from 'react-native-elements';



const More = ({ navigation }) => {
        
        return (
            <View style={styles.container}>
            <Headers />
            <Text style={styles.posts}>More</Text>
            <View style={styles.body}>
            <TouchableOpacity style={styles.touchStyle}>
            <Text style ={styles.buttons}>Connect with us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchStyle}>
            <Text style ={styles.buttons}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchStyle}>
            <Text style ={styles.buttons}>Careers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchStyle}>
            <Text style ={styles.buttons}>Events</Text>
            </TouchableOpacity>
            </View>
        </View>
        )
    }
    
    const styles = StyleSheet.create({
        posts: {
            fontFamily:'Didot-Bold',
            fontSize:23,
            // textAlign:'center',
            margin:10,
        },
        body:{
            borderTopColor:'lightgray',
            borderTopWidth: 1,
            alignItems:'center',
        },
        buttons:{
            fontFamily:'Trebuchet MS',
            padding:5,
            backgroundColor:'gray',
            margin:8,
            width:350,
            height:40,
            color:'white',
            fontSize:18,
            textAlign:'center',
        },
    })
    

export default More