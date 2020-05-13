import React,{ Component } from 'react';
import {  StyleSheet,
          Text, 
          View,
          TextInput,
          Button,
          TouchableWithoutFeedback
      } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Login extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      usuario:'',
      codigo:'',
      tipoUsuario:'',
    };
    
  }

  postData= async()=>{
    fetch('https://sleepy-retreat-55773.herokuapp.com/api/polievents/login/userlogin',{
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            user: this.state.usuario,
            code: this.state.codigo,
            //typeUser: this.state.tipoUsuario
        })
    }).then((response) => response.text())
    .then((responseData) => {
        var obj= JSON.parse(responseData)
        if(this.state.usuario==obj.user&&this.state.codigo==obj.code/*&&this.state.tipoUsuario==obj.typeUser*/){
          this.props.navigation.navigate('Home')
        }else{
          alert('Datos Incorrectos')
        }
    })
    .catch((err) => { console.log(err); });
  }

    render(){
        const{navigate}=this.props.navigation;
        return(
            <View style={styles.container}>
              <Text style={styles.welcome}>PoliEvents</Text>
              <TextInput
                style={styles.input}
                placeholder="Usuario"
                onChangeText={(usuario)=>this.setState({usuario})}
                value={this.state.usuario}
              />
              <TextInput
                style={styles.input}
                placeholder="Codigo"
                onChangeText={(codigo)=>this.setState({codigo})}
                value={this.state.codigo}
              />

              <Button
                color="#590871"
                large
                title='INGRESAR' 
                onPress={this.postData}
              />
              <Button
              color="#590871"
              title='X'
                onPress={()=> navigate('Home')}
              />
              <Button
              color="#590871"
              title='SplashScreen'
                onPress={()=> navigate('loadingScreen')}
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
              /*<TextInput
                style={styles.input}
                placeholder="Tipo Usuario"
                onChangeText={(tipoUsuario)=>this.setState({tipoUsuario})}
                value={this.state.tipoUsuario}
              />*/
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#4630AC'
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
      color:'#590871',
      //color:'#00B5DE',
      fontSize:14,
      
    }
  });