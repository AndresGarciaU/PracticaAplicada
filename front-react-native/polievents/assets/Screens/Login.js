import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default class Login extends React.Component{
    render(){    
        const{navigate}=this.props.navigation;
        return(
          <View style={styles.container}>
              <Text style={styles.welcome}>PoliEvents</Text>
              <TextInput
                style={styles.input}
                placeholder="Correo electronico"
              />
              <TextInput
              style={styles.input}
              placeholder="Contraseña"
              />
              <Button
                large
                title='INGRESAR' 
                onPress={()=> navigate('Home'
                )}
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
      backgroundColor:'#00355A'
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
      backgroundColor: 'white',
      borderRadius:25
    }
  });