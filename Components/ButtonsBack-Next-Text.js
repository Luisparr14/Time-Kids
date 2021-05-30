import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import styles from '../views/Modules/Styles/ModulesStyles'

export function ButtonNext({ rute, navigation,titleButton, ancho}) {
    return (
        <TouchableWithoutFeedback style={[styles.button, {width:ancho||200}]} onPress={() => navigation.navigate(rute)} >
            <Text style={styles.text}>{titleButton||'CONTINUAR'}</Text>
            <View style={{ justifyContent: 'center', width: 20, height: '100%', flex: 0.2 }}>
                <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/271/271226.png' }}></Image>
            </View>
        </TouchableWithoutFeedback>
    )
}

export function ButtonBack({ navigation }) {
    return (
        <TouchableWithoutFeedback style={styles.button} onPress={() => navigation.goBack()}>
            <View style={{ justifyContent: 'center', width: 20, height: '100%', flex: 0.08 }}>
                <Image style={{ width: 30, height: 30, position: 'relative', left: 10 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/709/709624.png' }}></Image>
            </View>
            <Text style={styles.text}>VOLVER</Text>
        </TouchableWithoutFeedback>
    )
}

export function TxtModule({ texto, title, alto }) {
    return (
        <View>
            <Text style={{ fontSize: 30, textAlign: 'center', width: '100%', marginTop: 20 }}>{title}</Text>
            <Text style={[styles.textInfo, { height: alto||730 }]}>
                {texto}
            </Text>
        </View>
    )
}
