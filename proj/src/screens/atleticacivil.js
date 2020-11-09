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

  
  export default class atleticacivil extends React.Component {
  render(){
      return(
          <ImageBackground source={require('../assests/brocadora.png')}  style={styles.backgroundImage}>
                    <ScrollView>
                    <View>
                        <Text style={styles.textform}>
                        
                        {'\n'}
                        A Associação Atlética Acadêmia Brocadora foi criada em 2015 com o intuito  de fomentar
                         para os alunos do curso de Engenharia Civil um melhor convívio e experiências dentro 
                         da UESC.
                         {'\n'}
                        Venha fazer parte do time Brocador, e nós ajude a continuar construindo uma atlética de sucesso!
                            👷‍♂️👷‍♀️
                        

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