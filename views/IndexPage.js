import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'

import imgBackground from '../assets/BackGroundIndex.png'
const IndexPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={imgBackground} style={styles.image}>

                {/* <View style={styles.containerButton}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.button}>
                        <Text style={styles.text}>REGISTRO</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={styles.containerButton}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
                        <Text style={styles.text}>INICIAR SESIÓN</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#000',

    },
    image: {
        height: 'auto',
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    text: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        height: 60,
        textAlignVertical: 'center'
    },

    containerButton: {
        position: 'relative',
        bottom: 90,
        display: 'flex',
        alignItems: 'center',
        alignContent: 'flex-end',
        marginBottom: 20,
        backgroundColor: '#8c8c8c',
        height: 55,
        width: '55%',
        borderRadius: 16
    },
    button: {
        width: '100%',
    }
});

export default IndexPage