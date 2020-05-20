import React, { Component } from 'react';
import {Text,StyleSheet,View,Button,TextInput} from 'react-native';

export default class Tickets extends React.Component{
    render(){
        
        return(
            <View>
                <Text>Eventos guardados</Text>
            </View>
        );
        }
}
const styles = StyleSheet.create({
    
    textInput:{
        alignSelf:'stretch',
        height:40,
        marginBottom:30,
        color:'#fff',
        borderBottomColor:'#00B5DE',
        borderBottomWidth:1,
    }
});