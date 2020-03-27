import React from 'react';
import {Text, Button,StyleSheet, View} from 'react-native';
import Login from './Login';


export default class registerFormat extends React.Component{
    
    render(){
        const{navigate}=this.props.navigation;
        return(
            <View>
                <Text>FORMATO DE REGISTRO</Text>
                <Button
                    title="Volver"
                    color="green"
                    onPress={()=> navigate('Login')}
                />
            </View>
            
            
        );
    }
}
const styles = StyleSheet.create({
    buttonBack:{
        backgroundColor:'white'
    }
});