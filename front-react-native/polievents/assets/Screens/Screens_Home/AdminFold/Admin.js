import React, { Component,useState} from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    ScrollView,
    SafeAreaView,
    Platform,
    Button,
    
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
const App = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View>
            <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
            </View>
            <View>
            <Button onPress={showTimepicker} title="Show time picker!" />
            </View>
            {show && (
            <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
            />
            )}
        </View>
        );
    };
export default class Admin extends React.Component{
    
    render(){
        return(
            
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.container2}>
                <View style={styles.container3}>
                <View style={styles.form}>
                    
                    <Text style={styles.header}>
                        Registro de Eventos
                    </Text>
                    <Button
                        onPress={() => App()}
                        title="DAte"
                    />
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Titulo'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Ciudad'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Correo'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Direccion'
                        secureTextEntry={true}
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Tipo'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Tema'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Contacto'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Presentador'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Hora Inicio'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Duracion'
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Lugar'
                        underlineColorAndroid={'transparent'}
                    />
                    <TouchableOpacity style={styles.registerButton}>
                        <Text style={styles.textButton}>
                            Registrarse
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>  
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
        backgroundColor:'#00355A',
        flex: 1,
        paddingBottom:10,
        paddingTop:10,
    },
    container3:{
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
        justifyContent:'center',
        paddingTop:10,
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