
import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet, Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModuleComponentWithOutImg from '../../Components/ModuleComponentWithOutImg';
// Iconos

const ModuleActividadesConPadres = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <ModuleComponentWithOutImg
          title="La colmena"
          background="#06cdb4"
          handleOnPress={() => navigation.navigate('LaColmena')}
        />

        {/*Es una app IOS */}
        <ModuleComponentWithOutImg
          title="El castillo de cuento de hadas"
          background="#c8e265"
          handleOnPress={() => navigation.navigate('CCH')}
        />

        <ModuleComponentWithOutImg
          title="Portalápices"
          background="#ff914d"
          handleOnPress={() => navigation.navigate('PortaLapices')}
        />

        <ModuleComponentWithOutImg
          title="Pulseras y brazalete"
          background="#ff914d"
          handleOnPress={() => navigation.navigate('Pulseras')}
        />

        <ModuleComponentWithOutImg
          title="La gallina porta huevos"
          background="#ff914d"
          handleOnPress={() => navigation.navigate('Gallina')}
        />

        <ModuleComponentWithOutImg
          title="Insectos, arañas y ciempiés"
          background="#ff914d"
          handleOnPress={() => navigation.navigate('Insectos')}
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

export default ModuleActividadesConPadres