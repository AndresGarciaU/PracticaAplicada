import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,Button,color } from 'react-native';
//import Nombre from './Settings/nombre';


export default class settings extends React.Component{
    render(){
        return(
            <View 
            style={styles.container}>
            <Button
            title='Nombre de usuario' 
            color= '#e0e0e0'
            onPress={()=> navigate('nombre'
            )} 
            
          />
          <Button
            large
            title='Siguiendo' 
            color= '#e0e0e0'
            onPress={()=> navigate('Nombre'
            )}
          />
          <Button
            large
            title='Cerrar sesion' 
            color= '#e0e0e0'
            onPress={()=> navigate('nombre'
            )}
          />
          <Button
            large
            title='Gestionar Eventos' 
            color= '#e0e0e0'
            onPress={()=> navigate('Nombre'
            )}
          />
          </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e0e0e0',
      backgroundColor:'#e0e0e0',
      alignItems: 'flex-start'
    },
    nombreDeUsuario: {
        backgroundColor: 'white',
        alignItems: 'flex-start',
        color : 'white'
    },
    textoBoton: {
        color: 'black'
    }
    })