import 'react-native-gesture-handler';
import React, { Component } from 'react';

import {

  View,
 Picker,
 StyleSheet,
 Image,
Button,
ImageBackground,
Text
} from 'react-native';


export default class curso extends React.Component {
    state = {
        disciplina: ''
    }

    state = {
        drive: ''
    }
    
    render(){
        return(
            <ImageBackground source={require('../assests/backsoft.jpg')}  style={styles.backgroundImage} style={styles.backgroundImage}> 
            <View style={styles.contanier}>
                
            <View>
            <Image source={require('../assests/youtube.png')}
                    style={styles.imagem} 
                    />

                </View>
                <Text style={styles.textoSelecionado}> 
                    Video Aulas
                </Text>
                
                <View >

                    <Picker
                  style={styles.pickercomponete}
                    selectedValue={this.state.disciplina}
                    onValueChange={
                        (itemValor, itemIndex)=>
                      this.setState({
                          disciplina: itemValor
                      })
                    }
       

                    >
                    <Picker.Item label= "Disciplina" value='' />
                    <Picker.Item label= "Cálculo I" value='Cálculo I' />
                    <Picker.Item label= "Física I" value='Física I' />
                    <Picker.Item label= "Geometria Analítica" value='Geometria Analítica' />
                    <Picker.Item label= "Química I" value='Química I' />
                    <Picker.Item label= "Desenho Técnico" value='Desenho Técnico'/>
                    </Picker>

                    <Button variant="contained" color="#171d4b"
                    title='Ok'
                    onPress={ ()=> this.props.navigation.navigate('lugarnehum')}
                    />
                </View>
                    <View>
                    <Image source={require('../assests/past.png')}
                    style={styles.imagem} 
                    />

                    </View>
                    <Text style={styles.textoSelecionado}> 
                        Drive
                    </Text>
                <View>
                <Picker
                  style={styles.pickercomponete}
                    selectedValue={this.state.drive}
                    onValueChange={
                        (itemValor, itemIndex)=>
                      this.setState({
                          drive: itemValor
                      })
                    }
       

                    >
                    <Picker.Item label= "Curso" value='' />
                    <Picker.Item label= "Adiministração" value='Administração' />
                    <Picker.Item label= "Agronomia" value='Agronomia' />
                    <Picker.Item label= "Bio Medicina" value='Bio Medicina' />
                    <Picker.Item label= "Biologia" value='Biologia' />
                    <Picker.Item label= "Ciência da Computação" value='Ciência da Computação'/>
                    </Picker>

                    <Button variant="contained" color="#171d4b"
                    title='Ok'
                    onPress={ ()=> this.props.navigation.navigate('lugarnehum')}
                    />
                </View>
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create ({
    contanier:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
        pickercomponete:{
            width: 800,
            backgroundColor: '#2ed3c6',
            padding: 20,
            marginHorizontal: 30,
            height: 50,
            width:300,
            marginTop: 50,
            marginBottom: 10
        }, 
      textoSelecionado:{
          padding: 10,
          fontSize: 20,
          borderColor: 'black'          
        },  
        backgroundImage: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor:'transparent',
            justifyContent: 'flex-start',
           
          },
          imagem :{
              width:  80,
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 200,
              marginTop: 20
          }
})