import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

//Importo mis Screens
import Events from './Screens_Home/Events';
import Likes from './Screens_Home/Likes';
import Admin from './Screens_Home/Admin';
import Tickets from './Screens_Home/Tickets';
import { StyleSheet} from 'react-native';






const Tab = createBottomTabNavigator();

class Home extends React.Component{
    static navigationOptions={
        title:'Home',
    };

    render(){
        return(
            <NavigationContainer>
                
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Events') {
                            iconName = focused ? 'ios-leaf' : 'ios-leaf';
                            } else if (route.name === 'Likes') {
                            iconName = focused ? 'ios-heart' : 'ios-heart';
                            }else if (route.name === 'Tickets') {
                            iconName = focused ? 'ios-bookmark' : 'ios-bookmark';
                            }else if (route.name === 'Admin') {
                            iconName = focused ? 'ios-bulb' : 'ios-bulb';
                            }

                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                    activeTintColor: '#00355A',
                    inactiveTintColor: 'gray',
                    }}
                >
                    
                    <Tab.Screen name="Events" component={Events}/>
                    <Tab.Screen name="Likes" component={Likes} />
                    <Tab.Screen name="Tickets" component={Tickets} />
                    <Tab.Screen name="Admin" component={Admin} />
                </Tab.Navigator>
            </NavigationContainer>
            
        );
    }
}

const styles=StyleSheet.create({
bottom:{
    backgroundColor:'#00355A'
},
bottomBar:{
    borderRadius:25
}
});

export default Home;