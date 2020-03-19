import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
//inmporta navegador
import Login from './assets/Screens/Login';
import Home from './assets/Screens/Home';
import { createAppContainer } from 'react-navigation';


const Navigator = createStackNavigator({
  Login:{screen:Login},
  Home:{screen:Home}
});

const App= createAppContainer(Navigator);
export default App;
