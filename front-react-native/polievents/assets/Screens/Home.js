import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import{ createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

//Importo mis Screens
import settings from './Settings/settings';
import Events from './Screens_Home/Events';
import Likes from './Screens_Home/Likes';
import Admin from './Screens_Home/AdminFold/Admin';
import Tickets from './Screens_Home/Tickets';
import { createStackNavigator } from 'react-navigation-stack';

const drawerStack = createStackNavigator({
settings:{
    screen:settings
}
});

const Tab = createBottomTabNavigator({
    
    Events:{
        screen: Events
    },
    /*Likes:{
        screen: Likes
    },
    Tickets:{
        screen: Tickets
    },*/
    Admin:{
        screen: Admin
    }
});

const Drawer = createDrawerNavigator({
    Tabs:{
        screen:Tab
    },
    settings:{
        screen:settings
    }
});

export default createAppContainer(Drawer);