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

  
  export default class atleticadeeconomia extends React.Component {
  render(){
      return(
          <ImageBackground source={require('../assests/economia.png')}  style={styles.backgroundImage}>
                    <ScrollView>
                    <View>
                        <Text style={styles.textform}>
                        
                        {'\n'}

                        A Associação Atlética de Ciências Econômicas foi fundada no ano de 2016 com o intuito de aumentar a integração entre os discentes e fortalecer a sensação de seu pertencimento no curso.
                        As cores escolhidas? azul e preto. O mascote? um leão, o que nos deixou conhecidos como Leões da Economia.
                        Nos consideramos uma imensa família, já que além da união de discentes, também temos o corpo docente que vibra junto com a gente em todos nossos projetos.
                        {'\n'}
                        Conheça mais um pouco sobre a nossa Associação Atlética, e desde já: SEJA MUITO BEM VINDO!

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