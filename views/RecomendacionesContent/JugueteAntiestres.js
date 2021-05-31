import React from 'react'
import { View, Image, ImageBackground, TouchableWithoutFeedback, Linking } from 'react-native'
import { ButtonBack } from '../../Components/ButtonsBack-Next-Text'
import Juguete from '../../assets/imgYoutubeMiniature/juguete.jpg'
import VideoButton from '../../Components/VideoButton'

const JugueteAntiestres = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor:'pink' }}>
            <VideoButton
                showButtonBack={true}
                videoTitle="Juguetes Antiestrés"
                navigation={navigation}
                handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=v2pv1i9bFVY')}
                imgBackground={Juguete}
            />
        </View>
    )
}

export default JugueteAntiestres