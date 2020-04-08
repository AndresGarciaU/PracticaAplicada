import React from 'react';
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
        userName: '',
        userCode: '',
        userType: '',
    };
    
  }

  postData= async()=>{
    this.setState({text:'Clicked'})
    fetch('https://limitless-crag-85743.herokuapp.com/api/polievents/login/userlogin',{
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            user: this.setState.userName,
            code: this.setState.userCode,
            typeUser: this.setState.userType
        })
    }).then((response) => response.text())
    .then((responseData) => { console.log("response: " + responseData); })
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
                onChangeText={(userName)=>this.setState({userName})}
                value={this.setState}
              />
              <TextInput
                style={styles.input}
                placeholder="Codigo"
                secureTextEntry
                onChangeText={(userCode)=>this.setState({userCode})}
                value={this.setState}
              />
              <TextInput
                style={styles.input}
                placeholder="Tipo Usuario"
                onChangeText={(userType)=>this.setState({userType})}
                value={this.setState}
              />
              <Button
                title='Probando Login'
                onPress={this.postData}
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