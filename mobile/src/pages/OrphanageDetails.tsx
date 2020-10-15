import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function OrphanageDetails() {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Pagina do orfanato aqui hehe :D</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    
        flex:1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    title: {
        width: '70%',
        fontFamily: 'Alata_400Regular',
        fontSize: 20,
        textAlign: 'center'
    }
})