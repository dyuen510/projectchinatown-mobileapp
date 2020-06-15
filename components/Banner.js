import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';

const Banner = () => {
    return (
    <View style = {styles.container}>
        <Image
        style={styles.stretch}
        source={require('../assets/images/ct.png')}
        />
    <View style = {styles.text0}>
        <Text style = {styles.text}> Bringing Chinatown Online</Text>
        <Text style = {styles.text2}>Helping Oakland Chinatown businesses regain loss traction
        due to the negative effects of the COVID-19 pandemic.</Text>
        <Text style = {styles.text3}>由于COVID-19大流行的负面影响
        帮助奥克兰唐人街企业重获损失。</Text>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    container:{
        // flex:1,
    },
    stretch: {
        opacity:0.9,
        width:450,
        height:350,
    },
    text0: {
        position:'absolute',
        margin:10,
        marginTop:80,
    },
    text: {
        color:'white',
        fontSize: 30,
        fontWeight:'bold',
        padding:5,
    },
    text2: {
        color:'white',
        fontSize:15,
        padding: 5,
    },
    text3: {
        color:'white',
        fontSize:15,
        padding: 5,
        width:200,
    }
})

export default Banner;