import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { ButtonBack, ButtonNext } from '../../Components/ButtonsBack-Next-Text'
import styles from './Styles/ModulesStyles'
const ActividadesMentales = ({ navigation }) => {

    return (
        <ScrollView>
            <View>
                <Text style={styles.textInfo}>
                    Contar con niveles óptimos de atención y concentración es crucial para los niños si queremos que
                    alcancen un alto rendimiento durante su proceso de aprendizaje. Por esta razón es indispensable
                    potenciar todas las áreas relacionadas con la atención, concentración, memoria, pensamiento y
                    percepción.Todo lo anterior apunta a una buena estimulación cognitiva, ya que es un conjunto de
                    procesos que permite el procesamiento de la información o el desarrollo de ciertos
                    conocimientos.Además, reúne todas aquellas actividades que ayudan a estimular, desarrollar, mejorar
                    y mantener las funciones de aprendizaje de un niño.Es por esto que presentamos las siguintes
                    actividades para los pequeños
                </Text>
            </View>
            <View style={[styles.buttonContainer, { marginTop: 110 }]}>
                <ButtonNext
                    rute="ViewAM"
                    navigation={navigation}
                />
                <ButtonBack
                    navigation={navigation}
                />
            </View>
        </ScrollView>
    )
}


export default ActividadesMentales