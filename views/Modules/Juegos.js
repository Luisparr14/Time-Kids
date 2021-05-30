import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { ButtonBack, ButtonNext } from '../../Components/ButtonsBack-Next-Text'

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
                <ButtonNext
                    rute="ViewJuegos"
                    navigation={navigation}
                />
                <ButtonBack
                    navigation={navigation}
                />
            </View>
        </ScrollView>
    )
}

export default Juegos