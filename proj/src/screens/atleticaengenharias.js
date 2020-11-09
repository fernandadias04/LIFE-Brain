import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {

    View,
   Picker,
   StyleSheet,
   Image,
  ImageBackground,
  Text,
  ScrollView
  } from 'react-native';

  
  export default class atleticaengenharias extends React.Component {
  render(){
      return(
          <ImageBackground source={require('../assests/aaa.png')}  style={styles.backgroundImage}>
                    <ScrollView>
                    <View>
                        <Text style={styles.textform}>
                        
                        {'\n'}
                        Fundada em 2015 e com o mascote escolhido sendo a Coruja, a Associação Atlética 
                        Acadêmica das Engenharias UESC tem o objetivo de promover a interação entre discentes,
                         docentes e servidores do campus, seja por meio de eventos esportivos ou atividades 
                         culturais.
                         {'\n'}
                          Cada vez mais forte, contamos com o apoio de todos vocês!!! 🦉🦉
                        

                        </Text>
                    </View>
                    </ScrollView>
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
        textform:{
            fontSize: 19,
            fontFamily:'Roboto',
            textAlign: 'justify',
       
         opacity: 0.5,
         marginTop: 200,
         margin: 15,
            
        },
    }) 