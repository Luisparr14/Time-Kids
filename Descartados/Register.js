import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const LoginPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containertText}>
                <Text style={styles.text}>  Time Kids</Text>
            </View>

            <View style={styles.containerButtonTop}>
                <View style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ fontSize: 30 }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 30, color: '#03d3fc' }}>Registro</Text>

                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre del padre"
                />
            </View>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre del niño"
                />
            </View>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                />
            </View>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                />
            </View>
            <View style={styles.containerLogin}>
                <View style={styles.containerButtonLogIn}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ fontSize: 29, textAlign: 'center', textAlignVertical: 'center', height: 50 }}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        padding: 35,
        fontSize: 60,
    },
    containertText: {
        alignItems: 'center',
    },
    containerButtonTop: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    containerInput: {
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        fontSize: 20,
        borderRadius: 10,
        height: 40,
        width: 350,
        margin: 15,
        borderWidth: 1,
        paddingStart: 10,
        backgroundColor: 'white'
    },
    button: {

    },
    containerLogin: {
        position: 'absolute',
        top: 670,
        alignItems: 'center',
        alignSelf: 'center',
    },
    containerButtonLogIn: {
        width: 350,
        height: 50,
        backgroundColor: '#03d3fc',
        borderRadius: 20
    }
})

export default LoginPage