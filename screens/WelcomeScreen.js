import React , { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Text, Button } from 'galio-framework';

export default class WelcomeScreen extends Component {
  render(){ 

      return(
      
          <View style = {{ 
            flex : 1, justifyContent : 'center', alignItems : 'center',
            backgroundColor : '#808080'
            }}>
            <Text style = 
            {{ fontSize : 50, marginBottom : 20, color : 'white'}}>
              Welcome Page</Text>
            <Button
            color = "info"
            round
            onPress={ () =>{ 
            this.props.navigation.goBack()}
            }
            style = {{width : 120, height : 50}}>
              Back to Login
            </Button>
        
      </View>

    );
  }
}
