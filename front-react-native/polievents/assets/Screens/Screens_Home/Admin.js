import React, { Component } from 'react';
import {
    Text,
    View,
    AsyncStorage
} from 'react-native';

import{events} from './Events';

export default class Admin extends React.Component{

    constructor(props){
        super(props);
        this.state={
            events
        }
        try{
            AsyncStorage.getItem(events).then((value)=>{
                if(value!=null){
                    console.log("Events esta completo")
                }else{
                    console.log("Events esta vacio")
                }
                this.setState({
                    eventos:JSON.parse(value)
                })
            })
        }catch(err){
            console.log(err)
        }
    }
    parseEventsData(){
        if(this.state.events!=null){
            console.log("Algo salio bien")
            return this.state.events.map((eventos,i)=>{
                return(
                    <View key={i}>
                        <Text>
                            {eventos.title}
                        </Text>
                        <Text>
                            {eventos.responsible}
                        </Text>
                        <Text>
                            {eventos.description}
                        </Text>
                    </View>
                )
            })
        }else{
            console.log("Algo salio mal")
        }

    }
    render(){
        return(
            <View>
                {this.parseEventsData()}
                <Text>No salio nada</Text>                 
            </View>
            
        );
    }
}