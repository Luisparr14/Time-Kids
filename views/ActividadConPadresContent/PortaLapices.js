import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import ComponentACP from '../../Components/ComponentACP'
import ImgPortalapiz from '../../assets/ImgACPContent/portalapiz.jpg'

const PortaLapices = ({ navigation }) => {
    return (
        <ScrollView>
            <ComponentACP
                navigation={navigation}
                title="Portalapices"
                description="Continuamos con una de esas manualidades con tubos de cartón para niños apta para
                todas las edades. Los mayores pueden revestir los tubos de cartón con papel de seda o cartulina, antes
                de recortarlos y montarlos. Los más pequeños pueden pintarlos con témperas, según su imaginación.
                Lo importante, para conseguir un efecto más bonito, es recortar los tubos de cartón a diferentes
                alturas: el más bajo para meter tijeras y reglas, el más alto para los lápices. Finalmente, se debe pegar
                una base de cartón rígido o plástico"
                img={ImgPortalapiz}
                alto={250}
            />
        </ScrollView>
    )
}

export default PortaLapices