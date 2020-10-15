import React from 'react'
import MapView, {Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps'
import mapMarker from '../images/map-marker.png'
import { Feather } from '@expo/vector-icons'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function OrphanagesMap() {
    
    const navigation = useNavigation()

    //Navegação para orphanage details
    function handleNavigateToOrphanageDetails() {
        navigation.navigate('OrphanageDetails')
    }
    
    return(
        <View style={styles.container}>
        <MapView 
            provider={PROVIDER_GOOGLE}
            style={styles.map} 
            initialRegion={{
            
            latitude: -27.6398397,
            longitude:-48.5310884,
            latitudeDelta: 0.3,
            longitudeDelta: 0.3
            
            }}
        >
            <Marker 
                icon={mapMarker}
                calloutAnchor={{
                    x:2.7,
                    y:0.8
                }}
                coordinate={{
                    latitude:-27.6398397,
                    longitude:-48.5310884
                }}
            >
            <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
                <View style={styles.calloutContainer} >
                <Text style={styles.calloutText}>Happy kids</Text>
                </View>
            </Callout>
            </Marker>
        </MapView>
        
        <View style={styles.footer}>
            
            <Text style={styles.footerText}>2 orfanatos encontrados</Text>
            
            {/* Botão que da leve perda de opacidade */}
            <TouchableOpacity style={styles.createOrphanageButton} onPress={()=>{}}>
            {/* feathericons.com para ver os icones da biblioteca1 */}
            <Feather name='plus' size={20} color='#fff'/>
            </TouchableOpacity>
        
        </View>
            
            
        <StatusBar style='auto'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    
    map: {
      width: '100%',//Dimensions.get('window').width,
      height: '100%'//Dimensions.get('window').height
    },
    
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
      justifyContent: 'center',
      
    },
    
    calloutText: {
      color: '#0089a5',
      fontSize: 14,
      fontFamily: 'Nunito_700Bold',
    },
  
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
  
      backgroundColor: '#fff',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
  
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center',
  
      //sombreamento
      elevation: 5
    },
  
    footerText: {
  
      color: '#8fa7b3',
      fontFamily: 'Nunito_700Bold',
    },
  
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  