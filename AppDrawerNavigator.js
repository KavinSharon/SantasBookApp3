import * as React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './AppNavigator'
import MyDonationsScreen from '../Screens/MyDonations'
import SettingScreen from '../Screens/SettingScreen'
import MyNotificationsScreen from '../Screens/notificationsScreen'
import SideBarMenu from './SideBarMenu'

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen:AppTabNavigator
    },
    MyDonations:{
        screen:MyDonationsScreen
    },
    Notifications:{
        screen:MyNotificationsScreen
    },
    Setting: {
        screen:SettingScreen
    },
},
    {
        contentComponent: SideBarMenu
    },
    {
        initialRouteName: 'Home'
        
    }
)