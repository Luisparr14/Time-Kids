import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import ComponentACP from '../../Components/ComponentACP'
import ImgCDH from '../../assets/ImgACPContent/LaColmena.jpg'

const PulserasYBrazaletes = ({ navigation }) => {
    return (
        <ScrollView>
            <ComponentACP
                navigation={navigation}
                title="Pulseras y brazalete"
                description="Dependiendo de si usas rollos de papel higiénico o de papel de cocina, tendrás
                pulseras para niña o brazaletes de súper héroe o heroína. Sin duda, lo más importante es la decoración
                que se le aplique al cartón: purpurina, témperas, mosaicos, pedrería, conchas, tela … Antes de
                comenzar con la decoración, ayuda al niño a cortar el tubo horizontalmente sin estropearlo, de modo
                que pueda deslizarse fácilmente dentro y fuera de la muñeca"
                img={ImgCDH}
                alto={230}
            />
        </ScrollView>
    )
}

export default PulserasYBrazaletes