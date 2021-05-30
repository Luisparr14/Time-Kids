import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import ComponentACP from '../../Components/ComponentACP'
import ImgGallina from '../../assets/ImgACPContent/gallina.jpg'

const LaGallinaPortaHuevos = ({ navigation }) => {
    return (
        <ScrollView>
            <ComponentACP
                navigation={navigation}
                title="La gallina porta huevos"
                description="Para hacer la gallina, es suficiente recortar el cartón para separar los huecos
                para los huevos del cuerpo central. La parte más estrecha, se convertirá en la cabeza y el cuello de la
                gallina.Para hacer la gallina, es suficiente recortar el cartón para separar los huecos para los huevos
                del cuerpo central. La parte más estrecha, se convertirá en la cabeza y el cuello de la gallinaa"
                img={ImgGallina}
                alto={200}
            />
        </ScrollView>
    )
}

export default LaGallinaPortaHuevos