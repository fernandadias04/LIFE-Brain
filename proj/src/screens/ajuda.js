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

import {Avatar} from 'react-native-elements';

export default class ajuda extends React.Component {
 render(){
     return(
        <ImageBackground source = {require ('../assests/aj.png')} style = {styles.backgroundImage}>
               <View style={{justifyContent: 'space-between', marginTop: 130, marginHorizontal: 150}}>
               <Button variant="contained" color="#171d4b"
                 title='Guia'
                 onPress={ ()=> this.props.navigation.navigate('guia')}
                />
                </View>
                <View style={{justifyContent: 'space-between', marginTop: 180, marginHorizontal: 120}}>
               <Button variant="contained" color="#171d4b"
                 title='Podcasts'
                 onPress={ ()=> this.props.navigation.navigate('podcast')}
                />
                </View>
                <View style={{justifyContent: 'space-between', marginTop: 175, marginHorizontal: 50}}>
               <Button variant="contained" color="#171d4b"
                 title='Indicação de Livros'
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
         justifyContent: 'flex-start',
        
    }
})