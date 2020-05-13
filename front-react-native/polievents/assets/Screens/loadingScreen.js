import React from 'react';
import {Text, 
        View,
        Image,
        StyleSheet,
    } from 'react-native';
import Logo from '../images/FondoApp2.png';
export default class loadingScreen extends React.Component{
    render(){
        const{navigate}=this.props.navigation;
        return(
            <View style={styles.container}>
                <Image
                    style={{width: 150, height: 150}}
                    source={Logo}
                />

            </View>
        );
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:0,
        paddingBottom:0,
    },
    title:{
        color:'#4630AC',
        alignContent:'center',
        justifyContent:'center',
        fontSize:50,
        paddingTop:0,
        paddingBottom:0,
    }
});