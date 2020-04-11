import React, { Component } from 'react';
import {Text,StyleSheet,View,Button,TextInput} from 'react-native';

export default class Tickets extends React.Component{
   constructor(){
       super();
       this.state={
           user:'',
           code:'',
           typeUser:''

       }
   }
   postData = async () =>{
       
    this.setState({text:'Clicked'})
    fetch('https://limitless-crag-85743.herokuapp.com/api/polievents/login/createuser/standart',{
    method:'POST',
    body:{
        "user": "davargas",
        "code": "1520014222",
        "typeUser": "estudiante"
    }
}).then((response) => response.json())
    .then((responseJson) => {
        this.setState({
            text: JSON.stringify(responseJson)
        })
    }
    )}
   
    render(){
        
        return(
            <View>
            <TextInput 
            style={styles.textInput}
            placeholder='user'
            onChangeText={(user)=>this.setState({user})}
             underlineColorAndroid={'transparent'}
             value={this.state.user}
        />
        <TextInput 
            style={styles.textInput}
            placeholder='code'
            onChangeText={(code)=>this.setState({code})}
            underlineColorAndroid={'transparent'}
            value={this.state.code}
        />
        <TextInput 
            style={styles.textInput}
            placeholder='typeUser'
            onChangeText={(typeUser)=>this.setState({typeUser})}
            value={this.state.typeUser}
            underlineColorAndroid={'transparent'}
        />
        
        <Button onPress={this.postData}
        title='postData'/>
               <Text>
                    {this.state.text}
                </Text>
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