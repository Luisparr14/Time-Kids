import React from 'react'
import { View, Image, ImageBackground, TouchableWithoutFeedback, Linking } from 'react-native'
import Juguete from '../../assets/imgYoutubeMiniature/juguete.jpg'
import VideoButton from '../../Components/VideoButton'

const JugueteAntiestres = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
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