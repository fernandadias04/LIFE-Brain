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

export default class extracurricular extends React.Component {
render(){
    return(
        <ImageBackground source={require('../assests/backsoft.jpg')}  style={styles.backgroundImage} style={styles.backgroundImage}>
       <ScrollView>
        <View style={styles.container}>
            <View >  
               
              
                <Button type = 'clear'  
                title= 'UESC English' 
                style={styles.botao}
                 onPress={ ()=> this.props.navigation.navigate('uescenglish')} />
               
                <Button type = 'clear' 
                title= 'Iniciação Científica'
                 onPress={ ()=> this.props.navigation.navigate('iniciacao')} />
               
                <Button type = 'clear'              
                title= 'PIBID' 
                 onPress={ ()=> this.props.navigation.navigate('pibid')}/>
            </View>
            <View > 
                <Button type = 'clear'                
                title= 'Monitoria'
                onPress={ ()=> this.props.navigation.navigate('monitoria')}/>
                
                <Button type = 'clear'              
                title= 'Caminhão Com Ciência' 
                 onPress={ ()=> this.props.navigation.navigate('caminhão')}/>
                
                <Button type = 'clear'                
                title= 'Feira de Profissões' 
                 onPress={ ()=> this.props.navigation.navigate('feira')}/>
            </View>
            <View > 
                <Button type = 'clear'                 
                title= 'Esportes' 
                 onPress={ ()=> this.props.navigation.navigate('esportes')}/>
               
                <Button type = 'clear'                 
                title= 'Tabalho Voluntário' 
                 onPress={ ()=> this.props.navigation.navigate('voluntario')}/>
 
            </View>
            <View > 
                <Button type = 'clear'                
                title= 'Yoga'
                onPress={ ()=> this.props.navigation.navigate('yoga')}/>
                
                <Button type = 'clear'              
                title= 'Xadrez' 
                 onPress={ ()=> this.props.navigation.navigate('xadrez')}/>
                
                <Button type = 'clear'                
                title= 'Observatório' 
                 onPress={ ()=> this.props.navigation.navigate('observatorio')}/>
            </View>
            <View > 
                <Button type = 'clear'                
                title= 'Clube dos Escritores'
                onPress={ ()=> this.props.navigation.navigate('culbeescritores')}/>
                
                <Button type = 'clear'              
                title= 'Tai Chi Chuan' 
                 onPress={ ()=> this.props.navigation.navigate('taichichuan')}/>
                
                <Button type = 'clear'                
                title= 'Atendimento Piscológico' 
                 onPress={ ()=> this.props.navigation.navigate('atendimento')}/>
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
       }
}
)