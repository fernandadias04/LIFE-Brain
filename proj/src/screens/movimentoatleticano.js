import 'react-native-gesture-handler';
import React, { Component } from 'react';

import {

  View,
 Picker,
 StyleSheet,
 Image,
ImageBackground,
Text
} from 'react-native';
 import {Button, Icon} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

export default class movimentoatleticano extends React.Component {
render(){
    return(
        <ImageBackground source={require('../assests/backsoft.jpg')}  style={styles.backgroundImage} style={styles.backgroundImage}>
          <ScrollView>
       <View style={styles.container}> 
               
                <Text style={styles.textform}>
                Uma atlética acadêmica pode ser definida como uma organização estudantil que tem como objetivo promover 
                o esporte e a integração entre os estudantes da universidade. ESPORTE, essa é a palavra mais importante
                 a ser destacada.
                </Text>

                <Button type = 'clear'  
                title= 'Atléticas' 
                style={styles.botao}
                 onPress={ ()=> this.props.navigation.navigate('atleticas')} />
               
                <Button type = 'clear' 
                title= 'Produtos Disponíveis'
                 onPress={ ()=> this.props.navigation.navigate('')} />
               
                <Button type = 'clear'              
                title= 'Eventos' 
                 onPress={ ()=> this.props.navigation.navigate('')}/>


        </View>
        </ScrollView>
        </ImageBackground>
    )

}
}
const styles = StyleSheet.create({
  
  container:{ 
     textAlign: 'center',
     justifyContent: 'center',
     margin: 30, 
     marginVertical: 90,
    
  },
  
    backgroundImage: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor:'transparent',
      justifyContent: 'flex-start',
     
    },
    botao: {
        
        flex: 1,
        paddingHorizontal: 90,
        marginTop: 100,
        textAlign: 'center',
        color: '#171d4b',
        backgroundColor:'transparent',
       },
       
       textform:{
        color: '#171d4b',
        fontSize: 20,
        fontFamily:'Roboto',
        textAlign: 'justify',  
        opacity: 0.5,
        margin: 20,
        marginBottom: 30
        
    },
}
)