import React from 'react'
import { Linking } from 'react-native'
import ComponentRecomendaciones from '../../Components/ComponentRecomendaciones'

const Terapia = ({ navigation }) => {
    return (
        <ComponentRecomendaciones
            navigation={navigation}
            title="Terapia psicologica"
            description={"Ninguna de nuestras actividades puede reemplazar el trabajo de un psicólogo.\nTe recomendamos "+
            "acudir a un profesional pediatra si quieres una alternativa más personalizada"}
            alto={400}
            showButtonBack={true}
        />
    )
}

export default Terapia