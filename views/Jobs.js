import React, {useState} from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Headers from '../components/Header';

import { SearchBar } from 'react-native-elements';



const Jobs = ({ navigation }) => {

    const [search, updateSearch] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Headers />
                <Text style={styles.jobs}>Classified Jobs</Text>
            </View>
            <SearchBar platform ='ios' placeholder = 'Search ...' round='true'
            onChangeText={updateSearch} value={search} />
            <TouchableOpacity style={styles.button}>
                <Text>Post a Job</Text>
                </TouchableOpacity>
            </View>

            // <Button style ={styles.postJob} type='outline'
            //     title='post a job'
            //     onPress={()=>Alert.alert('this function is not ready yet')}
            // />
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    jobs: {
        fontFamily:'Didot-Bold',
        fontSize:23,
        textAlign:'center',
        margin:10,
    },
    button:{
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    }
})

export default Jobs