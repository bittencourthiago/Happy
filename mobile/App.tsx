
import React from 'react';

import {useFonts} from 'expo-font'
import{Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito'
import{Alata_400Regular} from '@expo-google-fonts/alata'

import Routes from './src/routes'

export default function App() {

  //carregando as fontes
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Alata_400Regular
  })

  if(!fontsLoaded) {
    return null
  }

  return (
    <Routes/>
  );
}
