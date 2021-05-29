import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
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
            <View style={[styles.buttonContainer,{marginBottom:100}]}>
                <TouchableWithoutFeedback style={styles.button} onPress={()=>navigation.navigate('ViewEjercicios')} >
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


export default EjercicioAlAireLibre