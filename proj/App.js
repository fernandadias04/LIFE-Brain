
import 'react-native-gesture-handler';
import React, { Component } from 'react';

import {
  createAppContainer
 } from 'react-navigation';

 import {
  createStackNavigator
 } from 'react-navigation-stack'; 
import  {HomeScreen,  DetailsScreen, ProfileScreen, texto2, agenda, curso, cadastro, 
  extracurricular, uescenglish, inciacao, pibid, caminhão, feira, esportes, esportes1,
  outros, outros1, outros2, empresajr, life, tecno, reural, optimus, lea, focus, patrono, cia, movimentoatleticano, 
atleticas, atleticademedicina, alteticaengenharias, atleticaagro, atleticacivil, atleticadeeconomia, atleticadireito, atleticaenfermagem, atleticavet,
atleticabiomedicina, configuraçao, conta, notificação, perigo, ajuda, podcast, guia,
yoga, trilha, xadrez, observatorio,
clubeescritores, taichichuan, atendimento, voluntario, monitoria}
   from './src/screens/index';
import iniciacao from './src/screens/inciacao';

  const AppNaviator = createStackNavigator (
    {
      Home:{
        screen: HomeScreen
      }, 
      Perfil:{
        screen: ProfileScreen
      },
     
      Details:{
        screen: DetailsScreen
      },
      texto2:{
        screen: texto2
      },
      agenda: {
        screen: agenda
      },
      curso:{
        screen: curso
      },
      cadastro:{
        screen: cadastro
      }, 
      extracurricular:{
        screen: extracurricular
      },

      uescenglish:{
        screen: uescenglish
      },
      iniciacao:{
        screen: iniciacao
      },
      pibid:{
        screen:pibid
      },
      caminhão:{
        screen: caminhão
      },
      feira:{
        screen: feira
      },
      esportes:{
        screen: esportes
      },
      esportes1:{
        screen: esportes1
      },
      outros:{
        screen: outros
      },
      outros1:{
        screen: outros1
      },
      outros2:{
        screen: outros2
      },
      empresajr:{
        screen: empresajr
      },
      reural:{
        screen: reural
      },
      life:{
        screen: life
      },
      cia:{
        screen:cia
      },
      tecno:{
        screen: tecno
      },
      lea:{
        screen: lea
      },
      focus:{
        screen:focus
      },
      patrono:{
        screen: patrono
      },
      optimus:{
        screen:optimus
      }, 
      movimentoatleticano:{
        screen:movimentoatleticano
      },
      atleticas:{
        screen:atleticas
      },
      atleticademedicina:{
        screen:atleticademedicina
      }, 
      atleticavet:{
        screen: atleticavet
      },
      atleticadeeconomia:{
        screen: atleticadeeconomia
      }, 
      atleticaagro:{
        screen:atleticaagro
      },
      atleticadireito:{
        screen:atleticadireito
      },
      atleticaenfermagem:{
        screen:atleticaenfermagem
      },
      atleticacivil:{
        screen: atleticacivil
      },
      atleticabiomedicina:{
        screen: atleticabiomedicina
      },
      alteticaengenharias:{
        screen: alteticaengenharias
      },
      configuraçao:{
        screen:configuraçao
      }, 
      conta:{
        screen:conta
      },
      notificação:{
        screen:notificação
      },
      perigo:{
        screen:perigo
      },
      ajuda:{
        screen:ajuda
      },
      podcast:{
        screen:podcast
      },
      guia:{
        screen:guia
      },
      yoga:{
        screen:yoga
      },
      trilha:{
        screen:trilha
      },
      xadrez:{
        screen:xadrez
      },
      observatorio:{
        screen:observatorio
      },
      clubeescritores:{
        screen:clubeescritores
      },
      taichichuan:{
        screen:taichichuan
      },
      atendimento:{
        screen:atendimento
      },
      voluntario:{
        screen:voluntario
      },
      monitoria:{
        screen:monitoria
      }

    },

      {
        initialRouteName: 'Home'
      }
    
  )


const AppCont = createAppContainer (AppNaviator);



  export default class App extends Component{
    render (){
      return <AppCont/>;
    }
  }
