import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//Navegador que precisa ficar por volta de todas as telas
//Screen que é cada uma das telas 
const { Navigator, Screen } =  createStackNavigator()

import OrphanagesMap from './pages/OrphanagesMap'
import OrphanageDetails from './pages/OrphanageDetails'


export default function Routes() {
    return(
        <NavigationContainer>
        
            <Navigator screenOptions={{
                headerShown: false //desabilitar o header
            }}>
            
                <Screen name="OrphanagesMap" component={OrphanagesMap}/>
                <Screen name="OrphanageDetails" component={OrphanageDetails}/>
                
            </Navigator>
        
        </NavigationContainer>
    )
}