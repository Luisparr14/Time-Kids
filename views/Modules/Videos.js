import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import styles from './Styles/ModulesStyles'

const Videos = ({ navigation }) => {

    return (
        <ScrollView>
            <View>
                <Text style={styles.textInfo}>
                    El uso del video facilita la construcción de un conocimiento significativo dado que se aprovecha el
                    potencial comunicativo de las imágenes, los sonidos y las palabras para transmitir una serie de
                    experiencias que estimulen los sentidos y los distintos estilos de aprendizaje en los niños. Esto permite
                    concebir una imagen más real de un concepto.Además Cambiar el ritmo habitual e innova en las
                    rutinas diarias.Es por esto que presentamos las siguientes actividades para los pequeños
                </Text>
            </View>
            <View style={[styles.buttonContainer, {marginTop:265}]}>            
                <TouchableWithoutFeedback style={styles.button} onPress={()=>navigation.navigate('ViewVideos')} >
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


export default Videos