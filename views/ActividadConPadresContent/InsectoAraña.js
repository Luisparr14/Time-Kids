import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import ComponentACP from '../../Components/ComponentACP'
import ImgInsectos from '../../assets/ImgACPContent/insectos.jpg'

const InsectoAraña = ({ navigation }) => {
    return (
        <ScrollView>
            <ComponentACP
                navigation={navigation}
                title="Insectos, arañas y ciempiés"
                description="Tu hijo puede dar rienda suelta a su imaginación convirtiendo las
                hueveras en ciempiés, mariquitas, abejas o arañas. Para un efecto de mayor realismo puede servir,
                para las patas o las alas, limpiapipas. Son plegables y «peludas» y para hacer manualidades son
                fantásticas"
                img={ImgInsectos}
                alto={170}
            />
        </ScrollView>
    )
}

export default InsectoAraña