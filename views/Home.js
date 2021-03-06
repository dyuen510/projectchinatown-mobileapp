import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native'

import FetchApi from '../components/FetchApi';
import Support from '../components/Support';
import Headers from '../components/Header';
import Banner from '../components/Banner';

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Headers />
                <Banner />
                <Support />
                <FetchApi />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Home