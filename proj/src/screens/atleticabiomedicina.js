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

  
  export default class atleticabiomedicina extends React.Component {
  render(){
      return(
          <ImageBackground source={require('../assests/biomedicina.png')}  style={styles.backgroundImage}>
                    <ScrollView>
                    <View>
                        <Text style={styles.textform}>
                        
                        {'\n'}
                        A Associação Atlética Acadêmica de Biomedicina Uesc (AAABU) foi criada em 2017 e 
                        desde então tem como objetivo integrar todos os estudantes do curso de Biomedicina da 
                        uesc, como também com os outros cursos e atléticas.
                        {'\n'}
                        Promovemos atividades esportivas, lazer e educacional, afim de desenvolver o 
                        interesse por questões voltadas ao convívio social e participação em eventos que a
                         universidade pode nos proporcionar.
                        

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