import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import BottomTabA from '../views/Home'
import BottomTabB from '../views/Jobs'
import BottomTabC from '../views/Posts'
import BottomTabD from '../views/Favorites'


const tabNavigator = createBottomTabNavigator({
    TabA: createStackNavigator({
        TabA: BottomTabA,
    }),
    TabB: createStackNavigator({
        TabB: BottomTabB,
    }),
    TabC: createStackNavigator({
        TabC: BottomTabC,
    }),
    TabD: createStackNavigator({
        TabD: BottomTabD,
    }),

})

    // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

    // const NavFooter = createBottomTabNavigator();

    // function MyTabs() {
    //   return (
    //     <Tab.Navigator>
    //       <Tab.Screen name="Home" component={HomeScreen} />
    //       <Tab.Screen name="Settings" component={SettingsScreen} />
    //     </Tab.Navigator>
    //   );
    // }

const NavFooter = createAppContainer(tabNavigator)
export default NavFooter;