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

export default class atleticas extends React.Component {
render(){
    return(
        <ImageBackground source={require('../assests/backsoft.jpg')}  style={styles.backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}> 
               
                <Button type = 'clear'  
                title= 'A.A.A. XIII de Julho' 
                style={styles.botao}
                 onPress={ ()=> this.props.navigation.navigate('atleticademedicina')} />
               
                <Button type = 'clear' 
                title= 'Atlética Acadêmica de Medicina Veterinária'
                 onPress={ ()=> this.props.navigation.navigate('atleticavet')} />
               
                <Button type = 'clear'              
                title= 'Associação Atlética de Ciências Econômicas' 
                 onPress={ ()=> this.props.navigation.navigate('atleticadeeconomia')}/>
                <Button type = 'clear'              
                title= 'Associação Atlética Acadêmica de Agronomia' 
                 onPress={ ()=> this.props.navigation.navigate('atleticaagro')}/>
                 <Button type = 'clear'              
                title= 'Associação Atlética Acadêmica de Direito da UESC' 
                 onPress={ ()=> this.props.navigation.navigate('atleticadireito')}/>
                <Button type = 'clear'              
                title= 'Associação Atlética Acadêmica de Enfermagem' 
                 onPress={ ()=> this.props.navigation.navigate('atleticaenfermagem')}/>
                <Button type = 'clear'              
                title= 'Associação Atlética Acadêmica de Brocadora' 
                 onPress={ ()=> this.props.navigation.navigate('atleticacivil')}/>
                <Button type = 'clear'              
                title= 'Associação Atlética Acadêmica de Biomedicina UESC' 
                 onPress={ ()=> this.props.navigation.navigate('atleticabiomedicina')}/>
                <Button type = 'clear'              
                title= 'Associação Atlética Acadêmica das Engenharias UESC' 
                 onPress={ ()=> this.props.navigation.navigate('atleticaengenharias')}/>
        </View>
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
       }
}
)