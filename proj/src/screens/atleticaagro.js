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

  
  export default class atleticaagro extends React.Component {
  render(){
      return(
          <ImageBackground source={require('../assests/devastadora.png')}  style={styles.backgroundImage}>
                    <ScrollView>
                    <View>
                        <Text style={styles.textform}>
                        
                        {'\n'}
                        Associação Atlética Acadêmica de Agronomia (A.A.A.A.) 🐗
                        {'\n'}
                        Nós somos a Atlética  Devastadora, a primeira atlética oficial do curso de Agronomia! Fundada em 2019, nós proporcionamos eventos, produtos e minicursos certificados para  que todos os alunos da UESC se lembrem do mais importante: a VIDA dentro da universidade.
                        Nosso objetivo é fazer sua estrada aqui dentro ser mais leve e fácil, além de carregar boas lembranças azuis e laranjas.
                        Venha conosco nessa jornada Devastadora e vamos seguir essa estrada juntos! 💙🧡
                        

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