import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import styles from './Styles/ModulesStyles'

const Juegos = ({ navigation }) => {

    return (
        <ScrollView>
            <View>
                <Text style={styles.textInfo}>
                    Los juegos interactivos tienen múltiples beneficios en el aprendizaje de los niños. Permiten reforzar la
                    educación estimulando habilidades como la lingüística, visoespacial o la psicomotriz. Mientras el
                    niño aprende las reglas del juego, se consigue que se incremente su motivación por jugar y cada vez
                    resuelva el juego de la mejor forma. También se puede destacar la gran mejora de los procesos de
                    atención y comprensión.Otro de los beneficios de los juegos interactivos es el de juntar padres y niños
                    en una misma actividad. Los juegos deben ser utilizados por adultos y niños, de esta manera, los
                    padres podrán guiar a los niños en el aprendizaje. Es importante que se guíe y ayude al niño mientras
                    este juegue para que le pueda sacar al juego el máximo partido. Es por esto que presentamos las
                    siguientes actividades para los pequeños
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <View>

                </View>
                <TouchableWithoutFeedback style={styles.button} onPress={() => navigation.navigate('ViewJuegos')}>
                    <Text style={styles.text}>CONTINUAR</Text>
                    <View style={{ justifyContent: 'center', width: 20, height: '100%', flex: 0.2 }}>
                        <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/271/271226.png' }}></Image>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback style={styles.button} onPress={() => navigation.goBack()}>
                    <View style={{ justifyContent: 'center', width: 20, height: '100%', flex: 0.08 }}>
                        <Image style={{ width: 30, height: 30, position: 'relative', left: 10 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/709/709624.png' }}></Image>
                    </View>
                    <Text style={styles.text}>VOLVER</Text>
                </TouchableWithoutFeedback>
            </View>
        </ScrollView>
    )
}

export default Juegos