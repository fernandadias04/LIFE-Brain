import 'react-native-gesture-handler';
import React, { Component } from 'react';

import {

  View,
  Text,
  Button,
  Image,
  ImageBackground, 
  ScrollView,
  StyleSheet,
} from 'react-native';



export default class podcast extends React.Component {
 render(){
     return(
        <ImageBackground source = {require ('../assests/podc.png')} style = {styles.backgroundImage}>
            </ImageBackground>
        )
     }
    }

    const styles = StyleSheet.create({
        backgroundImage: {
             flex: 1,
             flexDirection: 'column',
             backgroundColor:'transparent',
             justifyContent: 'flex-start',
            
        }
    })