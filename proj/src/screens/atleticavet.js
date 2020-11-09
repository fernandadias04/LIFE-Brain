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

  
  export default class atleticavet extends React.Component {
  render(){
      return(
          <ImageBackground source={require('../assests/venenosa.png')}  style={styles.backgroundImage}>
                    <ScrollView>
                    <View>
                        <Text style={styles.textform}>
                        Somos a Associação Atlética Acadêmica de Medicina Veterinária (A.A.A.M.V)
                        {'\n'}
                        A Atlética Venenosa foi criada em 2018 com o propósito de unir os discentes, docentes e a comunidade acadêmica por meio de práticas esportivas e realização de eventos socio-culturais.
                        E com vocês podemos realizar muito mais, vem pro ninho, vem pra venenosa 🐍

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
            fontSize: 22,
            fontFamily:'Roboto',
            textAlign: 'justify',
       
         opacity: 0.5,
         marginTop: 200,
         margin: 15,
            
        },
    }) 