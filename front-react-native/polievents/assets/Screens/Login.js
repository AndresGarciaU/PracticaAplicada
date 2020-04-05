import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
              <View >
              <Text style={styles.signUpText}>¿No tienes cuenta?</Text>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={()=> navigate('registerFormat')}
                >
                  <Text style={styles.registerText}>
                    Registrarse
                  </Text>
                </TouchableOpacity>
              </View>
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
    },
    signUpContainer:{
      //alignContent:'center',
      //marginBottom:0,
      //padding:10,
      //marginVertical:0,
      alignContent:'flex-end'
    },
    signUpText:{
      //alignItems:'center',
      color:'white',
      //justifyContent: 'center'
      fontSize:16
    },
    registerButton:{
      //alignContent:'center',

      

    },
    registerText:{
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      color:'#00B5DE',
      fontSize:14,
      
    }
  });