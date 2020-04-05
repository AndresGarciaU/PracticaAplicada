import React,{ Component }  from 'react';
import {Text, Button, View} from 'react-native';

export default class Likes extends React.Component{
    constructor(props){
        super(props);
        this.state={text:''};
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
                user: "juparram",
                code: "1620040648",
                typeUser: "estudiante"
            })
        }).then((response) => response.text())
        .then((responseData) => { console.log("response: " + responseData); })
        .catch((err) => { console.log(err); });
    }
    
    render(){
        return(
            <View>
                <Button onPress={this.postData} title="Post Data"/>
                <Text>
                    {this.state.text}
                </Text>
            </View>
        );
    }
}