import React,{ Component }  from 'react';
import {
    Text,
    View,
    AsyncStorage,
    StyleSheet,
    Image
} from 'react-native';

    import{events} from './DB_Events';
    
export default class Events extends React.Component{
    constructor(props){
        super(props);
        this.state={
            events
        }
        try{
            AsyncStorage.getItem(events).then((value)=>{
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
            return this.state.events.map((eventos,i)=>{
                return(
                    <View
                        style={styles.events}
                        key={i}
                    >
                        <Image
                        style={styles.png}
                            source={{
                                uri:eventos.images
                            }}  
                        />
                        <Text style={styles.title}>
                            {eventos.title}
                        </Text>
                        <Text style={styles.responsible}>
                            {eventos.responsible}
                        </Text>
                        <Text style={styles.description}>
                            {eventos.description}
                        </Text>
                    </View>
                )
            })
        }
    }
    render(){
        return(
            <View style={styles.container}>
                {this.parseEventsData()}            
            </View>
            
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