import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'

import imgBackground from '../assets/BackGroundIndex.png'
const IndexPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="stretch" source={imgBackground} style={styles.image}>
            <View style={[styles.buttonContainer]}>
                <View style={[styles.subContainerButton]}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={[{fontSize: 29, textAlign: 'center', textAlignVertical: 'center' },styles.text]}>INICIAR SESIÓN</Text>
                    </TouchableOpacity>
                </View>
            </View>
                {/* <View style={styles.containerButton}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
                            <Text style={styles.text}>INICIAR SESIÓN</Text>
                        </TouchableOpacity>
                </View> */}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',

    },
    image: {
        backgroundColor:'red',
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
    buttonContainer:{
        display: 'flex',
        flex: 0.3,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    subContainerButton:{
        width:'100%',
        height:'100%'
    },
    button: {
        justifyContent: 'center',
        borderRadius: 30,
        width: "90%",
        height: 50,
        alignSelf: 'center',
        backgroundColor: "#8c8c8c",
        
    }
});

export default IndexPage

{/* <View style={styles.containerButton}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.button}>
                        <Text style={styles.text}>REGISTRO</Text>
                    </TouchableOpacity>
                </View> */}
