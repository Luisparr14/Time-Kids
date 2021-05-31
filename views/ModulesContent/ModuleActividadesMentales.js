import React from 'react';
import { View, ScrollView, Linking } from 'react-native'
import { ButtonBack } from '../../Components/ButtonsBack-Next-Text';

import ModuleComponentWithOutImg from '../../Components/ModuleComponentWithOutImg';
// Iconos

const ModuleActividadesMentales = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ModuleComponentWithOutImg
          title="Juego de Ordenar"
          background="#ffe16c"
          textSize={40}
          
          handleOnPress={() => Linking.openURL('https://www.mundoprimaria.com/juegos-educativos/juegos-de-memoria-infantiles/juegos-de-ordenar')}
        />

        <ModuleComponentWithOutImg
          title="Juego de puzzles"
          background="#ffe16c"
          textSize={40}
          handleOnPress={() => Linking.openURL('https://apps.apple.com/es/app/shape-builder-preschool-learning/id306572986?ign-mpt=uo%3D6')}
        />
        <ModuleComponentWithOutImg
          title="Juego de memoria"
          background="#ffe16c"
          textSize={40}
          handleOnPress={() => Linking.openURL('https://www.mundoprimaria.com/juegos-educativos/juegos-de-memoria-infantiles/primaria-donde-estan')}
        />

        <ModuleComponentWithOutImg
          title="Juego de vocabulario"
          background="#ffe16c"
          textSize={38}
          handleOnPress={() => Linking.openURL('https://www.mundoprimaria.com/juegos-educativos/juegos-de-letras/juegos-de-vocabulario')}
        />

        <ButtonBack
        navigation={navigation}
        />

      </View>
    </ScrollView>

  )
}


export default ModuleActividadesMentales