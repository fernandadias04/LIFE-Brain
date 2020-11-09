import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {

    View,
   Picker,
   StyleSheet,
   Image,
   Button,
  ImageBackground,
  Text
  } from 'react-native';

  
  export default class confihuraçao extends React.Component {
  render(){
      return(
          <ImageBackground source={require('../assests/configu.png')}  style={styles.backgroundImage}>
               
               <View style={{justifyContent: 'space-between', marginTop: 124, marginHorizontal: 160}}>
               <Button variant="contained" color="#171d4b"
                 title='Conta'
                 onPress={ ()=> this.props.navigation.navigate('conta')}
                />
                </View>
                <View style={{justifyContent: 'space-between', marginTop: 145, marginHorizontal: 120}}>
               <Button variant="contained" color="#171d4b"
                 title='Notificações'
                 onPress={ ()=> this.props.navigation.navigate('notificação')}
                />
                </View>
                <View style={{justifyContent: 'space-between', marginTop: 170, marginHorizontal: 100}}>
               <Button variant="contained" color="#171d4b"
                 title='Função Perigo'
                 onPress={ ()=> this.props.navigation.navigate('perigo')}
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

    })  