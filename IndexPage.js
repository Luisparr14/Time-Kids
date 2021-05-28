import React from 'react'
import { View, Image, Text, Button, ImageBackground, StyleSheet } from 'react-native'

import imgBackground from './assets/BackGroundIndex.png'
const IndexPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={imgBackground} style={styles.image}>
                <View style={styles.button}>
                    <Button  title="Registro"></Button>
                </View>
                <View style={styles.button}>
                    <Button onPress={()=>navigation.push('Modules')} title="Iniciar sesion"></Button>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'red',

    },
    image: {
        height: 'auto',
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        borderColor: 'black'

    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    },

    button: {
        position: 'relative',
        top: 200,
        left: 150,
        marginBottom: 20,
        width: 120
    }
});

export default IndexPage