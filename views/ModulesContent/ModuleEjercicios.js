import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet, Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModuleComponentWithOutImg from '../../Components/ModuleComponentWithOutImg';

// Iconos

const ModuleEjercicios = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <ModuleComponentWithOutImg
          title="Carrera con sacos/costales"
          background="#ffe16c"
          handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=gxNgnGiRupo&feature=emb_logo')}
        />

        <ModuleComponentWithOutImg
          title="Carreras de tres piernas"
          background="#06cdb4"
          handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=DOTy0MI7Zxo')}
        />

        {/*Es una app IOS */}
        <ModuleComponentWithOutImg
          title="Juego de tirar a la cuerda"
          background="#c8e265"
          handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=moHHLQGGGxw&feature=emb_imp_woyt')}
        />

        <ModuleComponentWithOutImg
          title="Bolos con botellas de plástico"
          background="#ff914d"
          handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=poX-8yyH5xw')}
        />

        <ModuleComponentWithOutImg
          title="La gallinita ciega"
          background="#ff914d"
          handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=sMztRKF0v3A&feature=emb_imp_woyt')}
        />

        <ModuleComponentWithOutImg
          title="Avioncito/rayuela"
          background="#ff914d"
          handleOnPress={() => Linking.openURL('https://www.youtube.com/watch?v=nHWUSxlaasg')}
        />

      </View>
    </ScrollView>

  )
}
export default ModuleEjercicios