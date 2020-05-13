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
                                <Image
                                    style={styles.png}
                                    source={{
                                        uri:'https://obscure-basin-34228.herokuapp.com/imagenes/especiales/proyecto-12.jpg',
                                    }}
                                />
                                <Text style={styles.description}>
                                    {'Ciudad: '+eventos.ciudad}
                                </Text>
                                <Text style={styles.description}>
                                    {'Direccion: '+eventos.direccion}
                                </Text>
                                <Text style={styles.description}>
                                    {'Presentador: '+eventos.presentador}
                                </Text>
                                <Text style={styles.description}>
                                    {eventos.dia+'/'+eventos.mes+'/'+eventos.anio}
                                </Text>
                                <Text style={styles.description}>
                                    {'Duracion: '+eventos.duracion+' horas'}
                                </Text>
                            </View>
                )
            }) 
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.container2}>
                    {this.parseEventsData()} 
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
    container2:{
        backgroundColor:'#590871',
        flex: 1,
        paddingBottom:10,
        paddingTop:10,
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
        borderColor:'#590871',
        borderWidth:1,
        paddingBottom:10,
        
    },
    title:{
        fontSize:15,
        justifyContent:'center',
        marginBottom:10,
        fontWeight:'bold',
        paddingTop:10,
    },
    responsible:{
        fontSize:12,
        marginBottom:5,
    },
    description:{
        fontSize:10,
    },
});