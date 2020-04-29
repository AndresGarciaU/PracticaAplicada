import React from 'react';
import {Text,
        FlatList,
        StyleSheet,
        View,
        TextInput,

    } from 'react-native';
import Login from './Login';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class registerFormat extends React.Component{
    render(){
        const{navigate}=this.props.navigation;
        return(
            <View style={styles.container}>
                <View style={styles.form}>
                    
                    <Text style={styles.header}>
                        Registro
                    </Text>
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Nombres'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Apellidos'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Correo'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Contraseña'
                        secureTextEntry={true}
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Razón'
                        underlineColorAndroid={'transparent'}
                    />

                    <TouchableOpacity style={styles.registerButton}>
                        <Text style={styles.textButton}>
                            Registrarse
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>  
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#00355A',
        paddingLeft:60,
        paddingRight:60
    },
    form:{
        alignSelf:'stretch',
    },
    header:{
        fontSize:24,
        color:'#fff',
        paddingBottom:10,
        marginBottom:40,
        borderBottomColor:'#00B5DE',
        borderBottomWidth:1,
        alignContent:'center',
        justifyContent:'center'
    },
    textInput:{
        alignSelf:'stretch',
        height:40,
        marginBottom:30,
        color:'#fff',
        borderBottomColor:'#00B5DE',
        borderBottomWidth:1,
    },
    registerButton:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:20,
        backgroundColor:'#00B5DE',
        borderBottomWidth:1
    },
    textButton:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:18
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});