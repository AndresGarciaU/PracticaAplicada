import react from 'react';
import {createStackNavigator} from 'react-navigation-stack';   
import {createAppContainer} from 'react-navigation';
import Login from '../assets/components/Login';
const screens= {
Login:{
    screen:Login 
}

}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);