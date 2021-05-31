import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoginPage = ({ navigation }) => {

    const [nombre, setNombre] = useState({ ['nombre']: '' })
    const [edad, setEdad] = useState({ ['edad']: '' })

    const handleChange = value => {
        setNombre({ ['nombre']: value })
        setEdad({ ['edad']: value.edad })
    }

    const login = () => {
        console.log(nombre.nombre);
        console.log(edad.edad);
        edad.edad == '' || nombre.nombre == '' ? Alert.alert('Llege todos los campos', "Por favor llene los campos") : edad.edad < 18 ? Alert.alert('Debe ser mayor de edad', "Debe tener más de 18 años para acceder a la app") : navigation.navigate('Modules')
    }

    return (
        <View style={styles.container}>
            <View style={styles.containertText}>
                <Text style={styles.title}>Time Kids</Text>
            </View>

            <View style={[styles.containerButtonTop, { alignSelf: 'center' }]}>
                <TouchableOpacity>
                    <Text style={[{ fontSize: 30, color: '#03d3fc' }]}>Login</Text>
                </TouchableOpacity>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Nombre"
                name='Nombre'
                onChangeText={(value) => setNombre({ ['nombre']: value })}

            />
            <TextInput
                style={styles.input}
                placeholder="Edad"
                name='edad'
                onChangeText={(value) => setEdad({ ['edad']: value })}
            />

            <View style={[styles.buttonContainer]}>
                <View style={[styles.subContainerButton]}>
                    <TouchableOpacity style={styles.button} onPress={login}>
                        <Text style={{ fontSize: 29, textAlign: 'center', textAlignVertical: 'center' }}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 60,
        textAlign: 'center',
        padding: 40
    },
    containerButtonTop: {
        padding: 10
    },
    input: {
        fontSize: 22,
        borderRadius: 10,
        height: 40,
        width: "85%",
        marginBottom: 13,
        marginTop: 13,
        borderWidth: 1,
        paddingStart: 20,
        backgroundColor: 'white'
    },
    buttonContainer: {
        display: 'flex',
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    subContainerButton:{
        width:'100%',
    },
    button: {
        justifyContent: 'center',
        borderRadius: 30,
        width: "90%",
        height: 50,
        alignSelf: 'center',
        backgroundColor: "#38caff",
        marginBottom: "10%"
    }
})

export default LoginPage
