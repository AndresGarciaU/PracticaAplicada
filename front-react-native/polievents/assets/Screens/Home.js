import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
//Importo mis Screens

import Events from './Screens_Home/Events';
import Likes from './Screens_Home/Likes';
import Settings from './Screens_Home/Settings';
import Tickets from './Screens_Home/Tickets';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

class Home extends React.Component{
    static navigationOptions={
        title:'Home',
    };

    render(){
        return(
            <NavigationContainer>
                
                <Tab.Navigator
                    tabBarOptions={{
                        activeBackgroundColor:'#00B5DE',
                        inactiveBackgroundColor: '#00355A',
                        
                    }}
                >
                    
                    <Tab.Screen name="Events" component={Events} />
                    <Tab.Screen name="Likes" component={Likes} />
                    <Tab.Screen name="Tickets" component={Tickets} />
                    <Tab.Screen name="Settings" component={Settings} />
                </Tab.Navigator>
            </NavigationContainer>
            
        );
    }
}

const styles=StyleSheet.create({
bottom:{
    backgroundColor:'#00355A'
}
});

export default Home;