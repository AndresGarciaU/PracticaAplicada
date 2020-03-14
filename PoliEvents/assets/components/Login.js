import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';


class Login extends React.Component{
    render(){
        return(
    <View style={styles.container}>
        <Text style={styles.welcome}>Login</Text>
            <TextInput
             style={styles.input}
             placeholder="usuario"
             />
         <TextInput
         style={styles.input}
         placeholder="Contraseña"

         />
    </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'blue'
    },
    welcome:{
      padding:10,
      fontSize:30,
      textAlign:'center',
      color:'white'
    },
    input: {
      
      borderColor:'black',
      marginBottom:10,
      padding:10,
      width : "90%",
      backgroundColor: 'white'
  
    }
  });
  
export default Login;