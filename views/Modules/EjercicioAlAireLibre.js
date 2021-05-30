import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { ButtonBack, ButtonNext } from '../../Components/ButtonsBack-Next-Text'
import styles from './Styles/ModulesStyles'

const EjercicioAlAireLibre = ({ navigation }) => {

    return (
        <ScrollView>
            <View>
                <Text style={styles.textInfo}>
                    Dejar a los niños jugar con total libertad en el exterior es beneficioso para desarrollar su aprendizaje y
                    sus habilidades sociales y emocionales, algo que les ayudará en el futuro.
                    Hoy en día, y sobre todo en las ciudades, la mayoría de las actividades que realizan los niños se sitúan
                    en lugares cerrados. Las actividades al aire libre no sólo desarrollan mejores capacidades físicas,
                    gracias a la práctica de deporte, sino que también implican la mejora de otras habilidades beneficiosas
                    para los más pequeños. Ya de por sí, el ejercicio físico ayuda a que los niños ganen confianza en sí
                    mismos , porque desarrollan sus capacidades y vencen sus miedos.Las actividades al aire libre no sólo
                    desarrollan mejores capacidades físicas, gracias a la práctica de deporte, sino que también implican la
                    mejora de otras habilidades beneficiosas para los más pequeños. Ya de por sí, el ejercicio físico ayuda
                    a que los niños ganen confianza en sí mismos , porque desarrollan sus capacidades y vencen sus
                    miedos
                    </Text>
            </View>
            <View style={[styles.buttonContainer, { marginBottom: 100 }]}>
                <ButtonNext
                    navigation={navigation}
                    rute="ViewEjercicios"
                />
                <ButtonBack
                    navigation={navigation}
                />
            </View>
        </ScrollView>
    )
}


export default EjercicioAlAireLibre