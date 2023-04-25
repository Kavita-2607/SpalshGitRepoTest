import React , { Component } from 'react';
import { View, Image, StyleSheet, Alert   } from 'react-native';
import { Text, Button, Input } from 'galio-framework';

export default class LoginScreen extends Component {
  state ={
    name : 'Kavita',
    number : '8290216130',
    password : 'abc@123'
  }

  login(){
    // var result = 'username :' +this.state.name +', number : ' +this.state.number 
    //               +', password :' +this.state.password
    // console.log(result);
    Alert.alert('Login Alert', name, number, password);
    if(this.state.name == '' || this.state.password == '')
    {
      Alert.alert('Invalid username or password')
    }
  }

  render(){
    return(
      <View style = {{ 
        flex : 1, justifyContent : 'center', alignItems : 'center',
        backgroundColor : '#808080'
        }}>
        {/* <Image source={{uri : 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8='}} style={{width: 200, height: 200, marginBottom:30}}/> */}
        <Text style = 
        {{ fontSize : 50, marginBottom : 20, color : 'white'}}>Login</Text>
        

        <Input style = {styleApp.textInputApp}
          placeholder="Name"
          right
          icon="user"
          family="antdesign"
          iconSize={14}
          iconColor="black"
        />

        <Input style = {styleApp.textInputApp}
         placeholder="Phone Number"/>

        <Input style = {styleApp.textInputApp}
         placeholder="password" password viewPass />

        <Button
            color = "info"
            round
            onPress={ () =>{
              this.props.navigation.navigate('Welcome')
            }}
            style = {{width : 120}}>
              Go to Welcome
        </Button>
        
      </View>

    );
  }
}

const styleApp = StyleSheet.create({
  textInputApp :{
    width : 250,
    marginBottom : 10
  }

});
