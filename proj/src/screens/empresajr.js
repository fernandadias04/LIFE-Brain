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

export default class empresajr extends React.Component {
render(){
    return(
        <ImageBackground source={require('../assests/backsoft.jpg')}  style={styles.backgroundImage} style={styles.backgroundImage}>
        <ScrollView>
         <View style={styles.container}>
           
            <Image source={require('../assests/mej.png')} style={styles.logot}/> 
            <View >  
               <Text style={styles.textform}>
                Você já ouviu falar no MEJ (Movimento Empresa Júnior)? A sigla é pequena, mas a ambição 
               é grande: preparar universitários para empreender. Através da vivência empresarial durante 
               a graduação, o MEJ foca no aperfeiçoamento de habilidades como liderança, comunicação e
                trabalho em equipe
               </Text>
              
                <Button type = 'clear'  
                title= 'LIFE Jr.' 
                style={styles.botao}
                 onPress={ ()=> this.props.navigation.navigate('life')} />
               
                <Button type = 'clear' 
                title= 'Optimus Jr.'
                 onPress={ ()=> this.props.navigation.navigate('optimus')} />
               
                <Button type = 'clear'              
                title= 'Tecno Jr.' 
                 onPress={ ()=> this.props.navigation.navigate('tecno')}/>
            </View>
            <View > 
                <Button type = 'clear'                
                title= 'Rural Jr.'
                onPress={ ()=> this.props.navigation.navigate('reural')}/>
                
                <Button type = 'clear'              
                title= 'LEA Jr.' 
                 onPress={ ()=> this.props.navigation.navigate('lea')}/>
                
                <Button type = 'clear'                
                title= 'CIA Jr.' 
                 onPress={ ()=> this.props.navigation.navigate('cia')}/>
            </View>
            <View > 
                <Button type = 'clear'                 
                title= 'Focus Jr.' 
                 onPress={ ()=> this.props.navigation.navigate('focus')}/>
               
                <Button type = 'clear'                 
                title= 'Patrono Jr.' 
                 onPress={ ()=> this.props.navigation.navigate('patrono')}/>
 
            </View>

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
    logot:{
      alignItems: 'center',
      justifyContent:'center',
      width: 200,
      height: 100,
      flexDirection: 'column',
      marginLeft: 80
 },     

}
)