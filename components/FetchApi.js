import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';


export default class FetchApi extends Component {
    
    componentDidMount(){
    fetch('https://www.projectchinatown.com/api/all_businesses')
    .then(response => {
        return response.json();
    }).then(respondData => {
        console.log(respondData)
    })
}
    render() {
        return (
            <View>
                <Text> Testing the fetchApi</Text>
            </View>
        )
    }
}
// const FetchApi = () => {
//     return fetch('https://www.projectchinatown.com/api/all_businesses')
//     .then((response) => response.json())
//     .then((json) => {
//         return json.name
//     })
//     .catch((error) => {
//         console.error(error);
//     });
// }

// export default FetchApi