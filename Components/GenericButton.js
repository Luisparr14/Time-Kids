import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import styles from '../views/Modules/Styles/ModulesStyles'

export function GenericButton({titleButton, ancho, handleOnPress}) {
    return (
        <TouchableWithoutFeedback style={[styles.button, {width:ancho||200}]} onPress={handleOnPress} >
            <Text style={styles.text}>{titleButton}</Text>
            <View style={{ justifyContent: 'center', width: 20, height: '100%', flex: 0.2 }}>
                <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/271/271226.png' }}></Image>
            </View>
        </TouchableWithoutFeedback>
    )
}