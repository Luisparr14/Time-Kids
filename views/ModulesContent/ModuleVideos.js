import React from 'react';
import { View, ScrollView, Linking } from 'react-native'
import ModuleComponentWithOutImg from '../../Components/ModuleComponentWithOutImg';
import VideoButton from '../../Components/VideoButton';
import Vocales from '../../assets/imgYoutubeMiniature/Vocales.jpg'
import Cuentos from '../../assets/imgYoutubeMiniature/Cuentos.jpg'
import DibujarNumeros from '../../assets/imgYoutubeMiniature/DibujarNumeros.jpg'
import Planetas from '../../assets/imgYoutubeMiniature/Planetas.jpg'
import MeclarColores from '../../assets/imgYoutubeMiniature/MeclarColores.jpg'
import Cerdito from '../../assets/imgYoutubeMiniature/Cerdito.jpg'
import Robot from '../../assets/imgYoutubeMiniature/Robot.jpg'
import Dormir from '../../assets/imgYoutubeMiniature/Dormir.jpg'
import Profesiones from '../../assets/imgYoutubeMiniature/Profesiones.jpg'
import SistemaCirculatorio from '../../assets/imgYoutubeMiniature/SistemaCirculatorio.jpg'
import Sentidos from '../../assets/imgYoutubeMiniature/Sentidos.jpg'
import CadenaAlimenticia from '../../assets/imgYoutubeMiniature/CadenaAlimenticia.jpg'
import Animales from '../../assets/imgYoutubeMiniature/Animales.jpg'


const ModuleVideos = ({ navigation, props }) => {

    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>

                <VideoButton
                    videoTitle="Aprende las colores, vocales, números y frútas"
                    imgBackground={Vocales}
                    navigation={navigation}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=zLUcGwJ2t0U')}
                />

                <VideoButton
                    videoTitle="Cuentos infantiles para niños"
                    imgBackground={Cuentos}
                    navigation={navigation}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=9xMWgEZEEow')}
                />

                <VideoButton
                    videoTitle="Cómo Dibujar Los Números"
                    imgBackground={DibujarNumeros}
                    navigation={navigation}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=DcDtWGu2b3A')}
                />

                <VideoButton
                    videoTitle="Colorear los planetas"
                    imgBackground={Planetas}
                    navigation={navigation}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=lo9T9zjOXOQ')}
                />

                <VideoButton
                    videoTitle="Mezclar los colores"
                    imgBackground={MeclarColores}
                    navigation={navigation}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=GWS14nnIMXs')}
                />

                <VideoButton
                    videoTitle="Cómo hacer cerditos con material reciclado"
                    imgBackground={Cerdito}
                    navigation={navigation}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=IP6EvXo42ag')}
                />

                <VideoButton
                    videoTitle="Cómo hacer un robot con material reciclado"
                    imgBackground={Robot}
                    navigation={navigation}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=BeOJKnXwah4')}
                />

                <VideoButton
                    videoTitle="A prepararse para dormir"
                    imgBackground={Dormir}
                    navigation={navigation}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=ISKf4g5gI7g')}
                />

                <VideoButton
                    videoTitle="Aprende las profesiones"
                    imgBackground={Profesiones}
                    navigation={navigation}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=Qcz3ep7XWWI')}
                />

                <VideoButton
                    videoTitle="El sistema circulatorio"
                    imgBackground={SistemaCirculatorio}
                    navigation={navigation}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=ZzATGDMNKYw')}
                />

                <VideoButton
                    videoTitle="Los sentidos"
                    imgBackground={Sentidos}
                    navigation={navigation}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=IhO5Je1Puyw')}
                />

                <VideoButton
                    videoTitle="La cadena alimenticia"
                    imgBackground={CadenaAlimenticia}
                    navigation={navigation}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=LtDpx5HCG_Y')}
                />

                <VideoButton
                    videoTitle="Animales Herbívoros, Carnívoros y Omnívoros"
                    imgBackground={Animales}
                    navigation={navigation}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=fOYM6mZjIrc')}
                    showButtonBack={true}
                />
            </View>
        </ScrollView>

    )
}

export default ModuleVideos