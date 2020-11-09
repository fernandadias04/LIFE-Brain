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

export default class DetailsScreen extends React.Component {
 

  
  render(){
      return(
        <ImageBackground source={require('../assests/backsoft.jpg')}  style={styles.backgroundImage} style={styles.backgroundImage}>      
          <ScrollView>
            <View style={{flex: 1}}>
               
                <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                  <Text style ={styles.texto}>
                    Bem Vindes
                  </Text>


                </View>

                <View>

                </View>
              <View >
                <View style={ styles.botao}>
                <Button variant="contained" color="#171d4b"
                 title='Movimento Empresa Jr.'
                 onPress={ ()=> this.props.navigation.navigate('empresajr')}
                />
                 <Button variant="contained" color="#171d4b"
                 title='Agenda'
                 onPress={ ()=> this.props.navigation.navigate('agenda')}
                />
                <Button variant="contained" color="#171d4b"
                 title='Materiais'
                 onPress={ ()=> this.props.navigation.navigate('curso')}
                />
              </View>
                
              <View style={ styles.botao}>
                <Button variant="contained" color="#171d4b"
                title='Extras'
                 onPress={ ()=> this.props.navigation.navigate('extracurricular')}
                />  
                <Button variant="contained" color="#171d4b"
                 title='Movimento Atleticano'
                 onPress={ ()=> this.props.navigation.navigate('movimentoatleticano')}
                />                  
                <Button variant="contained" color="#171d4b"
                 title='Interação'
                 onPress={ ()=> this.props.navigation.navigate('interação')}
                />  
              </View>
              
              <View style={ styles.botao}>

                <Button variant="contained" color="#171d4b"
                 title='Motivação'
                 onPress={ ()=> this.props.navigation.navigate('ajuda')}
                /> 
                <Button variant="contained" color="#171d4b"
                 title='Configurações'
                 onPress={ ()=> this.props.navigation.navigate('configuraçao')}
                />   
                </View>

                </View>
            </View>
           
          </ScrollView>
        </ImageBackground>
      );
    }
  }

  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor:'transparent',
      justifyContent: 'flex-start',
     
    },

    texto: {
      fontSize: 50,
      fontFamily:'Roboto',
      color: 'orange',
      
    },
   botao: {
    flexDirection: 'row',
    marginVertical: 15,
    paddingVertical: 60,
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor:'transparent',
   }
  })