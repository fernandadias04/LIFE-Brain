import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet, 
  TextInput, 
  Image, 
  KeyboardAvoidingView, 
  ImageBackground, 
  ScrollView,
} from 'react-native';

export default class cadastro extends Component{
 
    render(){
     
  
        return(
            <ImageBackground source={require('../assests/back.jpg')} style={styles.backgroundImage} style={styles.backgroundImage}>
            <ScrollView>
            <KeyboardAvoidingView style = {{flex:1, justifyContent: 'center'}} behavior='padding'>
                <View>
                    <View style={styles.logot}>
                        <Image source={require('../assests/Logo.jpg')} style={styles.logot}
                        />
                    </View>
                      
                <View>
                  <TextInput
                       style={styles.inputstyle}
                       placeholder='Nome'
                       autoCorretc={false} 
                       onChageText={()=> {}}
                    />

                    <TextInput
                      style={styles.inputstyle}
                      placeholder= 'E-mail'
                      autoCorretc={false} 
                     onChageText={()=> {}}
                    />  
          
                    <TextInput
                      style={styles.inputstyle}
                      placeholder='Senha'
                      autoCorretc={false} 
                      onChageText={()=> {}}
                    />

                    <TextInput
                      style={styles.inputstyle}
                      placeholder='Curso'
                      autoCorretc={false} 
                      onChageText={()=> {}}
                    />
                </View>

                <View style={styles.logotipobotao}>
                     <Button variant="contained" color="#171d4b"
                    title='Cadastre-se'
                    onPress={ ()=> this.props.navigation.navigate('Details')}
                    />
                </View>
          
          
            </View>
            </KeyboardAvoidingView>
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

      inputstyle:{
       backgroundColor:  '#171d4b',
        width: '90%',
        marginBottom: 15,
        marginHorizontal: 20,
        color: 'white',
        fontSize: 17,
        borderRadius: 7,
      },

      cont:{
        flex:1, 
        alignItems: 'center',
        }

  })