import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
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
            <View style={[styles.buttonContainer, {marginTop:110}]}>
                <TouchableWithoutFeedback style={styles.button} onPress={()=>navigation.navigate('ViewAM')} >
                    <Text style={styles.text}>CONTINUAR</Text>
                    <View style={{justifyContent:'center',width: 20,height: '100%',flex: 0.2}}>
                        <Image style={{width:30, height:30}} source={{ uri: 'https://image.flaticon.com/icons/png/512/271/271226.png' }}></Image>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback style={styles.button} onPress={() => navigation.goBack()}>
                    <View style={{justifyContent:'center',width: 20,height: '100%',flex: 0.08}}>
                            <Image style={{width:30, height:30, position:'relative', left:10}} source={{ uri: 'https://image.flaticon.com/icons/png/512/709/709624.png' }}></Image>
                    </View>
                    <Text style={styles.text}>VOLVER</Text>
                </TouchableWithoutFeedback>
            </View>
        </ScrollView>
    )
}


export default ActividadesMentales