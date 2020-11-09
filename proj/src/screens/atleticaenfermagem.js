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

  
  export default class atleticaenfermagem extends React.Component {
  render(){
      return(
          <ImageBackground source={require('../assests/enfurecida.png')}  style={styles.backgroundImage}>
                    <ScrollView>
                    <View>
                        <Text style={styles.textform}>
                        
                        {'\n'}
                        ASSOCIAÇÃO ATLÉTICA ACADÊMICA DE ENFERMAGEM
                        {'\n'}
                        Fundada em 2018, a Atlética Enfurecida tem como por objetivo principal promover a unificação do corpo 
                        de estudantes do curso de Enfermagem, visando não só a implementação de esportes e eventos festivos, 
                        como a disseminação de informações e realização de movimentos solidários.
                        {'\n'}
                        Pretendemos estar presentes desde a entrada no curso até os semestres finais, seja na forma de nossos lindos produtos, ou apenas levando um pouco de diversão para tornar essa trajetória intensa um pouco menos desgastante.
                        {'\n'}
                        Vem ser ENFurecido com a gente! ♥️🐾
                        

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