import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';


export default class texto2 extends React.Component{
    render(){
        return(
            <ImageBackground source = {require ('../assests/back.jpg')} style = {styles.backgroundImage}>
            <ScrollView>
                <View style = {{flex:1, justifyContent: 'center'}}>

                    <View>
                    <Image source={require('../assests/Logo.jpg')} style={styles.logot}
                     />
                    </View>
                    
                    <View>
                        <Text style={styles.textform}>
                            O LIFE Brain visa uma melhor vivênvia acadêmica
                            primeiramente direcionada aos estudantes da Universidade 
                            Estaudal de Santa Cruz. Use e abuse deste recurso e contribua 
                            com sugestões para que possamos ser ainda mais funcionais. 
                        </Text>
                     </View>

                    <View style={styles.logotipobotao}>
                        <Button variant="contained" color="#171d4b"
                        title='Próximo'
                        onPress={ ()=> this.props.navigation.navigate('Perfil')}
                         />
                    </View>              
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
         justifyContent: 'flex-start',
        
    },
    
    logotipobotao: {
      backgroundColor: '#171d4b',
      paddingRight: 5,
      paddingLeft: 5,
      marginLeft: 100,
      marginRight:100,
      marginVertical: 5,
      borderRadius: 30
      },

      logot:{
        flex:1,
        marginVertical: 10,
        height: 290,
   },

   textform:{
    fontSize: 20,
    fontFamily:'Roboto',
    textAlign: 'justify',
    opacity: 0.5,
    marginTop: 40,
    margin: 20,
    
},
})