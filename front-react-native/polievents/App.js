import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
//inmporta navegador
import Login from './assets/Screens/Login';
import Home from './assets/Screens/Home';
import { createAppContainer } from 'react-navigation';
import { StackActions } from '@react-navigation/native';


const Navigator = createStackNavigator({
  
  Login:{
    screen:Login, 
    navigationOptions:{
      header:false
    }
  },
  Home:{
    screen:Home,
    navigationOptions:{
      header:false
    }
  },
});

const App= createAppContainer(Navigator);
export default App;
//#00355A
