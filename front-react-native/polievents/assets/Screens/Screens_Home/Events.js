import React,{ Component }  from 'react';
import {
    Text,
    View,
    AsyncStorage,
    StyleSheet,
    Image,
    Button,
    ScrollView,
    SafeAreaView
} from 'react-native';

    import{events} from './DB_Events';
    
export default class Events extends React.Component{
    constructor(props){
        super(props);
        this.state={
            eventoObj:[],
        }
        try{
            fetch('https://boiling-escarpment-94908.herokuapp.com/api/polievents/events/',{
                method:'GET',
                
            }).then((response) => response.text())
            .then((responseData) => {
                this.setState({
                    eventoObj: JSON.parse(responseData)
                });
            })
            .catch((err) => { console.log(err); });
        }catch(err){
            console.log(err)
        }
    }
    parseEventsData(){
            return this.state.eventoObj.map((eventos,i)=>{   
                return(       
                            <View
                            style={styles.events}
                            key={i}>
                            <Text style={styles.title}>
                                {eventos.titulo}
                            </Text>
                            <Text style={styles.title}>
                                {eventos.ciudad}
                            </Text>
                            <Text style={styles.title}>
                                {eventos.direccion}
                            </Text>
                            <Text style={styles.title}>
                                {eventos.presentador}
                            </Text>
                            <Text style={styles.title}>
                                {eventos.anio}
                            </Text>
                            <Text style={styles.title}>
                                {eventos.mes}
                            </Text>
                            <Text style={styles.title}>
                                {eventos.dia}
                            </Text>
                            <Text style={styles.title}>
                                {eventos.duracion}
                            </Text>
                            </View>

                )
            }) 
    }
    getData = async () =>{
        this.setState({text:'Clicked'})
        fetch('https://boiling-escarpment-94908.herokuapp.com/api/polievents/events/',{
        method:'GET',
        
    }).then((response) => response.text())
    .then((responseData) => {
        
        console.log("response: " + responseData);
    })
    .catch((err) => { console.log(err); });
}
    render(){
        return(
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    {this.parseEventsData()} 
                    <Button onPress={this.getData}
                        title='getData'
                    /> 
                </View>       
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffff',
        flex: 1,
    },
    png:{
        width: 200,
        height: 100,
        justifyContent:'center',
        paddingBottom:10,

    },
    events:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#ffff',
        paddingLeft:60,
        paddingRight:60,
        marginBottom:1,
        marginTop:1,
        borderColor:'#00355A',
        borderWidth:1,
        
    },
    title:{
        fontSize:15,
        justifyContent:'center',
        marginBottom:10,
        fontWeight:'bold',
    },
    responsible:{
        fontSize:12,
        marginBottom:5,
    },
    description:{
        fontSize:10,
    },
});