import React, {Component, useState} from 'react';
import { SplashScreen } from 'expo';
import { Text,ImageBackground,View, Image, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Splash = ({navigation}) => {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 5000);

  if (!timePassed) {
    return (
    
      <View style={styles.splash}
      source={require('./assets/splash-screen.png')}>
      <Text style={styles.text}>Splash Screen</Text>
      </View>
    );
  }
  // navigation.navigate('Splash');
  navigation.navigate('Splash');
   return null;  
};

const styles = StyleSheet.create({
  splash: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
    
  },
  text: {
    fontSize: 20, 
    color : 'red'

  }
});

export default Splash;