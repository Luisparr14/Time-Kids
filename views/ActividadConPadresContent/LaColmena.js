import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import ComponentACP from '../../Components/ComponentACP'
import ImgLaColmena from '../../assets/ImgACPContent/LaColmena.jpg'
const LaColmena = ({ navigation }) => {
    return (
        <ScrollView>
            <ComponentACP
                navigation={navigation}
                title="La Colmena"
                description=" Esta es una de las manualidades con tubos de cartón para niños más divertidas. Lo
                ideal es utilizar el cartón del papel de cocina, ya que el del papel de aluminio suele ser más rígido.
                Primero dobla el tubo para darle una forma hexagonal. Después recorta en varios trozos de igual
                tamaño. A continuación, pega uno al lado del otro para formar una colmena.
                El niño se divertirá pintando la colmena con tempera amarilla. Incluso puede poblarla con abejas
                hechas con los recipientes de los huevos sorpresa de chocolate. ¿Sabes cómo hacer las rayas negras de
                las abejas? Deja que el niño use los limpia pipas de color negro: el alambre interior se dobla con
                facilidad y está recubierto de pelillos, ideales para hacer tiras y antenas"
                img={ImgLaColmena}
                alto={330}
            />
        </ScrollView>
    )
}

export default LaColmena