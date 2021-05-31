import React from 'react';
import { View, ScrollView, Linking } from 'react-native'
import ModuleComponentWithOutImg from '../../Components/ModuleComponentWithOutImg';
import VideoButton from '../../Components/VideoButton';

// Images
import CarreraSacos from '../../assets/imgYoutubeMiniature/CarreraSacos.jpg'
import CarreraTresPiernas from '../../assets/imgYoutubeMiniature/CarreraTresPiernas.jpg'
import TirarLaCuerda from '../../assets/imgYoutubeMiniature/TirarLaCuerda.jpg'
import Boliche from '../../assets/imgYoutubeMiniature/Boliche.jpg'
import GallinitaCiega from '../../assets/imgYoutubeMiniature/GallinitaCiega.jpg'
import Avioncito from '../../assets/imgYoutubeMiniature/Avioncito.jpg'

const ModuleEjercicios = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


        <VideoButton
          videoTitle="Carrera con sacos/costales"
          imgBackground={CarreraSacos}
          navigation={navigation}
          handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=gxNgnGiRupo&feature=emb_logo')}
        />

        <VideoButton
          videoTitle="Carreras de tres piernas"
          imgBackground={CarreraTresPiernas}
          navigation={navigation}
          handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=DOTy0MI7Zxo')}
        />

        <VideoButton
          navigation={navigation}
          videoTitle="Juego de tirar a la cuerda"
          imgBackground={TirarLaCuerda}
          handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=moHHLQGGGxw&feature=emb_imp_woyt')}
        />

<VideoButton
          navigation={navigation}
          videoTitle="Bolos con botellas de plástico"
          imgBackground={Boliche}
          handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=poX-8yyH5xw')}
        />

<VideoButton
          navigation={navigation}
          videoTitle="La gallinita ciega"
          imgBackground={GallinitaCiega}
          handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=sMztRKF0v3A&feature=emb_imp_woyt')}
        />

<VideoButton
          navigation={navigation}
          videoTitle="Avioncito/rayuela"
          imgBackground={Avioncito}
          handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=nHWUSxlaasg')}
        />

      </View>
    </ScrollView>

  )
}
export default ModuleEjercicios