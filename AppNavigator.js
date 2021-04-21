import * as React from 'react';

import { Image,} from 'react-native';

import {createBottomTabNavigator} from 'react-navigation-tabs'

import BookDonateScreen from '../Screens/bookDonateScreen'
                                                             
import BookRequestScreen from '../Screens/bookRequestScreen'

import {AppStackNavigator} from './AppStackNavigator'

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:{
        
        screen:AppStackNavigator,
        navigationOptions:{
            tabBarIcon:<Image
                          source = {require("../assets/request-list.png")}
                          style = {{width:20,
                                    height:20,}}/>,
            tabBarLabel:"Donate Books"
            

        }
    },

    RequestBooks:{
        screen:BookRequestScreen,
        navigationOptions:{
            tabBarIcon:<Image
                          source = {require("../assets/request-book.png")}
                          style = {{width:20,
                                    height:20,}}/>,
            tabBarLabel:"Request Books"
                                   
        }
    }
})








