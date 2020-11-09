import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  StatusBar, 
  ScrollView,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {StyleSheet} from 'react-native';



export default class guia extends Component{
    render(){
      return(
         
          <ImageBackground source={require('../assests/back.jpg')} style={styles.backgroundImage}>
            <ScrollView>
                 
           <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../assests/Logo.jpg')} style={styles.logot}/>
              </View>
           
           
           <View style={{alignItems:'center'}}>
            <Text style={styles.textform}>
            No período final do Ensino Médio é comum uma grande expectativa com relação a faculdade e vida universitária, 
            como serão esses novos amigos, este lugar, a nova rotina, as matérias do curso, entre outras dúvidas. 
            {'\n'}
            {'\n'}
            Se eu pudesse te dar um conselho seria: MERGULHE! Sim, mergulhe! Se engajar neste cenário, conhecer os processos,
            saber quais recursos procurar é essencial para que você não se sinta perdido. Retenha tudo que é bom, pois todo conteúdo que 
            absorvido nesta caminhada será de grande valia em sua carreira pessoal e profissional.
            {'\n'}
            {'\n'}
            A formação superior não é uma trajetória que se completa de forma autônoma, ela precisa de vários estímulos para se solidificar e ser um trampolim para o futuro.
            APROVEITE O PRESENTE INTENSAMENTE!
            A notícia boa que temos é que a partir de então você não estará sozinho.
            {'\n'}
            {'\n'}
            O LIFE Brain visa uma melhor vivência acadêmica, primeiramente direcionada aos estudantes da Universidade Estadual de Santa Cruz.
            Use e abuse deste recurso e contribua com sugestões para que possamos ser ainda mais funcionais.
            {'\n'}
            {'\n'}
            Letiane Andrade Reis,
            {'\n'}
             Pscicóloga da Sindus Andritrz 

            </Text>
            </View>

       
           </ScrollView>
        </ImageBackground>
       
      );
    }
  }



  const styles = StyleSheet.create({
    backgroundImage: {
         flex: 1,
         width: undefined,
         height: undefined,
         flexDirection: 'column',
         backgroundColor:'transparent',
         justifyContent: 'flex-start',
         
    
    },

    logot:{
         
         width: 300,
         height: 100,
         flexDirection: 'column',
         marginTop: 10, 
    },

         logotipobotao: {
          backgroundColor: '#171d4b',
          paddingRight: 5,
          paddingLeft: 5,
          marginLeft: 100,
          marginRight:100,
          marginVertical: 10,
          borderRadius: 30
          },

          textform:{
              fontSize: 20,
              fontFamily:'Roboto',
              textAlign: 'justify',
         
           opacity: 0.5,
           marginTop: 40,
           margin: 20,
              
          },
         
    }
)