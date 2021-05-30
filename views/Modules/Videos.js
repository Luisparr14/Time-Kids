import React from 'react'
import { ScrollView, View, Text} from 'react-native'
import { ButtonBack, ButtonNext } from '../../Components/ButtonsBack-Next-Text'

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
                <ButtonNext
                rute="ViewVideos"
                navigation={navigation}
                />            
                <ButtonBack
                navigation={navigation}
                />
            </View>
        </ScrollView>
    )
}


export default Videos