import React from 'react';
import { View, ScrollView, Linking } from 'react-native'

import ModuleComponentWithOutImg from '../../Components/ModuleComponentWithOutImg';
// Iconos

const ModuleJuegos = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <ModuleComponentWithOutImg
          title="Dibujar y colorear"
          background="#06cdb4"
          textSize={40}
          handleOnPress={() => Linking.openURL('https://apps.apple.com/co/app/id1435796728?mt=8')}
        />

        {/* app apple */}
        <ModuleComponentWithOutImg
          title="Barquito chiquitoto"
          background="#06cdb4"
          textSize={40}
          handleOnPress={() => Linking.openURL()}
        />
        <ModuleComponentWithOutImg
          title="Toc and roll"
          background="#06cdb4"
          textSize={40}
          handleOnPress={() => Linking.openURL()}
        />

          <ModuleComponentWithOutImg
          title="Aprende a leer y escribir"
          background="#06cdb4"
          textSize={40}
          handleOnPress={() => Linking.openURL()}
        />
         <ModuleComponentWithOutImg
          title="Fun english"
          background="#06cdb4"
          textSize={40}
          handleOnPress={() => Linking.openURL()}
        />
      </View>
    </ScrollView>

  )
}

export default ModuleJuegos