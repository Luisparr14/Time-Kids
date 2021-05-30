import React from 'react';
import { View, ScrollView, Linking } from 'react-native'
import ModuleComponentWithOutImg from '../../Components/ModuleComponentWithOutImg';
// Iconos

const ModuleVideos = ({ navigation, props }) => {

    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <ModuleComponentWithOutImg
                    title="Aprende las colores, vocales, números y frútas"
                    background="#c8e265"
                    textSize={40}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=zLUcGwJ2t0U')}
                />

                <ModuleComponentWithOutImg
                    title="Cuentos infantiles para niños"
                    background="#c8e265"
                    textSize={40}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=9xMWgEZEEow')}
                />

                <ModuleComponentWithOutImg
                    title="Cómo Dibujar Los Números"
                    background="#c8e265"
                    textSize={40}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=DcDtWGu2b3A')}
                />

                <ModuleComponentWithOutImg
                    title="Colorear los planetas"
                    background="#c8e265"
                    textSize={40}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=lo9T9zjOXOQ')}
                />

                <ModuleComponentWithOutImg
                    title="Mezclar los colores"
                    background="#c8e265"
                    textSize={40}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=GWS14nnIMXs')}
                />

                <ModuleComponentWithOutImg
                    title="Cómo hacer cerditos con material reciclado"
                    background="#c8e265"
                    textSize={34}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=IP6EvXo42ag')}
                />

                <ModuleComponentWithOutImg
                    title="Cómo hacer un robot con material reciclado"
                    background="#c8e265"
                    textSize={35}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=BeOJKnXwah4')}
                />

                <ModuleComponentWithOutImg
                    title="A prepararse para dormir"
                    background="#c8e265"
                    textSize={40}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=ISKf4g5gI7g')}
                />

                <ModuleComponentWithOutImg
                    title="Aprende las profesiones"
                    background="#c8e265"
                    textSize={40}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=Qcz3ep7XWWI')}
                />

                <ModuleComponentWithOutImg
                    title="El sistema circulatorio"
                    background="#c8e265"
                    textSize={40}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=ZzATGDMNKYw')}
                />

                <ModuleComponentWithOutImg
                    title="Los sentidos"
                    background="#c8e265"
                    textSize={40}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=IhO5Je1Puyw')}
                />

                <ModuleComponentWithOutImg
                    title="La cadena alimenticia"
                    background="#c8e265"
                    textSize={40}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=LtDpx5HCG_Y')}
                />

                <ModuleComponentWithOutImg
                    title="Animales Herbívoros, Carnívoros y Omnívoros"
                    background="#c8e265"
                    textSize={40}
                    handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=fOYM6mZjIrc')}
                />



            </View>
        </ScrollView>

    )
}

export default ModuleVideos