
import React from 'react';
import 'react-native-gesture-handler';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';


import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTabA from './views/Home'
import BottomTabB from './views/Jobs'
import BottomTabC from './views/Posts'
import BottomTabD from './views/Favorites'
import BottomTabE from './views/More'


const tabNavigator = createBottomTabNavigator({

  Home: {
    screen:BottomTabA,
    navigationOptions:{
      tabBarIcon:({tintColor})=>(
        <Icon name ='ios-home' color= {tintColor} size={25}/>
      )
    }
  },
  Jobs: {
    screen:BottomTabB,
    navigationOptions:{
      tabBarIcon:({tintColor})=>(
        <Icon name ='ios-briefcase' color={tintColor} size={25}/>
      )
    }
  },
  Posts: {
    screen:BottomTabC,
    navigationOptions:{
      tabBarIcon:({tintColor})=>(
        <Icon name ='ios-chatbubbles' color={tintColor} size={25}/>
      )
    }
  },
  Favorites: {
    screen:BottomTabD,
    navigationOptions:{
      tabBarIcon:({tintColor})=>(
        <Icon name ='ios-heart' color={tintColor} size={25}/>
      )
    }
  },
  More: {
    screen: BottomTabE,
    navigationOptions:{
      tabBarIcon:({tintColor})=>(
        <Icon name = 'ios-list-box' color={tintColor} size={25}/>
      )
    }
  }
},
{
  // defaultNavigationOptions: ({ navigation }) => ({
  //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
  //     const {routeName } = navigation.state;
  //     let IconComponent = Ionicons;
  //     let iconName;
  //     if (routeName === 'Home') {
  //       iconName = focused
  //       ? 'ios-information-circle' : 'ios-information-circle-outline';
  //     } else if (routeName === 'Settings') {
  //       iconName = focused ? 'ios-list-box' : 'ios-list';
  //     }

  //     return <IconComponent name={iconName} size={25} color={tintColor} />; 
  //   },
  // }),
  tabBarOptions:{
    activeTintColor:'darkslateblue',
    inactiveTintColor:'gray',
  }
}
)

  //   Home: createStackNavigator({
  //     TabA:BottomTabA,
  //   },
  //   {
  //     headerMode:'none',
  //   }),
  //   Jobs: createStackNavigator({
  //       TabB: BottomTabB,
  //   },
  //   {
  //     headerMode:'none',
  //   }
  //   ),
  //   Posts: createStackNavigator({
  //       TabC: BottomTabC,
  //   },
  //   {
  //     headerMode:'none',
  //   },
  //   ),
  //   Favorites: createStackNavigator({
  //       TabD: BottomTabD,
  //   },
  //   {
  //     headerMode:'none',
  //   },
  //   {
  //     navigationOptions: ({ navigation }) => ({

  //       tabBarIcon: ({ focused, tintColor }) => {
  //         const { routeName } = navigation.state;

  //         let icon;

  //           switch(routeName) {
  //             case 'TabA':
  //               fontAwesome = `fas fa-home${focused ? '' : '-outline'}`;
  //               break;
  //               case 'TabB':
  //               fontAwesome = `fa fas fa-home${focused ? '' : '-outline'}`;
  //           }
  //         return <IconComponent name={iconName} size = {25} color = {tintColor} />
  //       }
  //     }),
  //   }
  //   ),
  // },
  // {
  //   tabBarOptions:{
  //     activeTintColor: 'blue',
  //     activeBackgroundColor:'gray',
  //     keyboardHidesTabBar: false,
  //     tabStyle: {
  //       backgroundColor:'white'
  //     },
  //     labelStyle: {
  //       fontSize: 16,
  //     }
  //   }
// })

const App = createAppContainer(tabNavigator)

export default App;
