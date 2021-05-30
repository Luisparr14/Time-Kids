import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet, Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
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
          onPress={() => Linking.openURL('https://www.mundoprimaria.com/juegos-educativos/juegos-de-memoria-infantiles/juegos-de-ordenar')}
        />

        <ModuleComponentWithOutImg
          title="Juego de puzzles"
          background="#06cdb4"
          textSize={40}
          onPress={() => Linking.openURL('https://apps.apple.com/es/app/shape-builder-preschool-learning/id306572986?ign-mpt=uo%3D6')}
        />
        <ModuleComponentWithOutImg
          title="Juego de memoria"
          background="#c8e265"
          textSize={40}
          onPress={() => Linking.openURL('https://www.mundoprimaria.com/juegos-educativos/juegos-de-memoria-infantiles/primaria-donde-estan')}
        />

        <ModuleComponentWithOutImg
          title="Juego de vocabulario"
          background="#ff914d"
          textSize={38}
          onPress={() => Linking.openURL('https://www.mundoprimaria.com/juegos-educativos/juegos-de-letras/juegos-de-vocabulario')}
        />

      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  containerModule: {
    height: 150,
    width: 350,
    marginBottom: 35,
    borderRadius: 20,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
  }
})

export default ModuleActividadesMentales