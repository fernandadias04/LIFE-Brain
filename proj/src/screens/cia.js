import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {

    View,
   Picker,
   StyleSheet,
   Image,
  ImageBackground,
  Text
  } from 'react-native';

  
  export default class cia extends React.Component {
  render(){
      return(
          <ImageBackground source={require('../assests/cia.png')}  style={styles.backgroundImage}>

          </ImageBackground>
      )
      }
    }

    const styles = StyleSheet.create({
        backgroundImage: {
          flex: 1,
          flexDirection: 'column',
          backgroundColor:'transparent',
    
        },
    })    