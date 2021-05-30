import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import ComponentACP from '../../Components/ComponentACP'
import ImgCDH from '../../assets/ImgACPContent/LaColmena.jpg'
const CastilloDelCuentoDeHadas = ({ navigation }) => {
    return (
        <ScrollView>
            <ComponentACP
                navigation={navigation}
                title="El Castillo del cuento de hadas"
                description="El castillo de cuento de hadas :Es un clásico de las manualidades con tubos de cartón para niños: el
                castillo encantado de los cuentos de hadas. Utiliza rollos de cartón de diferentes diámetros y algunos
                rollos de papel higiénico para variar las alturas. Como puedes ver, es una manualidad fácil y divertida
                para niños de todas las edades. Los más pequeños pueden dibujar las puertas y ventanas como en la
                imagen; los mayores pueden decorar con cartulina de colores y pegamento"
                img={ImgCDH}
                alto={220}
            />
        </ScrollView>
    )
}

export default CastilloDelCuentoDeHadas