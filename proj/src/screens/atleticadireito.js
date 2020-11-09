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

  
  export default class atleticadireito extends React.Component {
  render(){
      return(
          <ImageBackground source={require('../assests/direito.png')}  style={styles.backgroundImage}>
                    <ScrollView>
                    <View>
                        <Text style={styles.textform}>
                        
                        {'\n'}
                        A Associação Atlética Acadêmica de Direito da UESC (A.A.A.D.) surgiu em 2016
                         da união de um grupo de alunos do curso que visavam a representatividade, além do âmbito estudantil, 
                        nas searas esportiva e social, sendo esta a entidade responsável por coordenar e promover a integração 
                        entre os alunos, além de ajudar a zelar pela saúde física e mental desses, objetivos desenvolvidos
                         precipuamente através de desportos e eventos sócio-culturais. 
                        {'\n'} 
                        Para mais informações basta entrar em contato com o Instagram Oficial da entidade @morcegaouesc.
                        

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