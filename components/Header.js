import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

const Headers = () => {
    return (
        <View style={styles.container}>
        <View style={styles.body}>
        <Image
        style={styles.logo}
        source={require('../assets/images/mainlogo.png')}
        />
        <Text style={styles.text}>Project</Text>
        <Text style={styles.text2}>  Chinatown</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width:50,
        height:50,
        marginRight:15,
    },
    body: {
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        paddingTop: 40,
        backgroundColor:'lightblue',
        flexDirection: 'row',
        // flex:1,
        // justifyContent:'center',
    },
    text: {
        fontWeight: "bold",
        fontSize: 30,
    },
    text2: {
        fontSize: 25,
        color: 'yellow',
    },
})

export default Headers;