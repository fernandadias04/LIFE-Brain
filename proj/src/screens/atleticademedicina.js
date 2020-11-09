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

  
  export default class atleticademedicina extends React.Component {
  render(){
      return(
          <ImageBackground source={require('../assests/medicina.png')}  style={styles.backgroundImage}>
                    <ScrollView>
                    <View>
                        <Text style={styles.textform}>
                        Liderada pelo Urubu rei e constituída pelo preto e amarelo 🦅
                        {'\n'}

                        Isso mesmo!! A Associação Atlética Acadêmica XIII de Julho (A.A.A. XIII de Julho) vai se apresentar: 
                        concebida em 2015 e idealizada para proporcionar vivencias ímpares na prática desportiva, nossa atlética hoje oferece uma ampla gama de 
                        modalidades, que vão desde o xadrez e a natação até a bateria e cheerleading, tudo isso para ampliar as possibilidades do nosso 
                        bando... E você acha que paramos por aqui? Jamais!! O nosso objetivo de salvaguardar a saúde mental dos nosso discentes vai muito além, por 
                        isso estamos constantemente nos atualizando e reinventando, 
                        mas sabe o que nos falta? Você! Vem voar mais alto com a gente!💛🖤
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