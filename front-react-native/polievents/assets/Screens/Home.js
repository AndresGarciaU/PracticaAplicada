import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
//Importo mis Screens

import Events from './Screens_Home/Events';
import Likes from './Screens_Home/Likes';
import Settings from './Screens_Home/Settings';
import Tickets from './Screens_Home/Tickets';

const Tab = createBottomTabNavigator();

class Home extends React.Component{
    static navigationOptions={
        title:'Home',
    };

    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Events" component={Events} />
                    <Tab.Screen name="Likes" component={Likes} />
                    <Tab.Screen name="Tickets" component={Tickets} />
                    <Tab.Screen name="Settings" component={Settings} />
                </Tab.Navigator>
            </NavigationContainer>
            
        );
    }
}


export default Home;