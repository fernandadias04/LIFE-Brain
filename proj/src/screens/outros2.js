import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    Button,
    View,
   Picker,
   StyleSheet,
   Image,
  ImageBackground,
  Text
  } from 'react-native';

  
  export default class outros2 extends React.Component {
  render(){
      return(
          <ImageBackground source={require('../assests/outros3.png')}  style={styles.backgroundImage}>
            <View style={styles.logotipobotao}>
         
         <Button variant="contained" color="#171d4b"
           title='Voltar ao Inicio'
           onPress={ ()=> this.props.navigation.navigate('extracurricular')}
        />
          
          </View>
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
        logotipobotao: {
            backgroundColor: '#171d4b',
            paddingRight: 5,
            paddingLeft: 5,
            marginLeft: 100,
            marginRight:100,
            marginTop: 550,
            borderRadius: 30
            },
  
    }) 