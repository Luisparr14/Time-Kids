import React from 'react'
import { Linking } from 'react-native'
import ComponentRecomendaciones from '../../Components/ComponentRecomendaciones'

const CronogramaDeActividades = ({ navigation }) => {
    return (
        <ComponentRecomendaciones
            navigation={navigation}
            title="Cronograma de actividades"
            description="Para los niños, establecer rutinas y hábitos en el día a día tiene sus beneficios, entre ellas, les aporta
            seguridad al saber lo que tienen que hacer, esto les aporta paz y tranquilidad, también les ayuda a ser
            personas más perseverantes y constantes y a descubrir el mundo.
            Por eso, te recomendamos que por medio de time kids establezcas un cronograma de actividades,
            donde se organicé su día a día con sus actividades cotidianas (Como dormir, hacer sus deberes
            escolares, comer, jugar) y las que te sugerimos"
            alto={400}
            boothButton={true}
            handleoOnPress={() => Linking.openURL('https://www.google.com/calendar')}
            titleButton="Ir a Calendario"
        />
    )
}

export default CronogramaDeActividades