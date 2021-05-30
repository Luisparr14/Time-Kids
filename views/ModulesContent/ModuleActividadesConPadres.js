
import React from 'react';
import { View, ScrollView, Linking } from 'react-native'
import ModuleComponentWithOutImg from '../../Components/ModuleComponentWithOutImg';
// Iconos

const ModuleActividadesConPadres = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <ModuleComponentWithOutImg
          title="La colmena"
          background="#f16f6e"
          handleOnPress={() => navigation.navigate('LaColmena')}
        />

        {/*Es una app IOS */}
        <ModuleComponentWithOutImg
          title="El castillo de cuento de hadas"
          background="#f16f6e"
          handleOnPress={() => navigation.navigate('CCH')}
        />

        <ModuleComponentWithOutImg
          title="Portalápices"
          background="#f16f6e"
          handleOnPress={() => navigation.navigate('PortaLapices')}
        />

        <ModuleComponentWithOutImg
          title="Pulseras y brazalete"
          background="#f16f6e"
          handleOnPress={() => navigation.navigate('Pulseras')}
        />

        <ModuleComponentWithOutImg
          title="La gallina porta huevos"
          background="#f16f6e"
          handleOnPress={() => navigation.navigate('Gallina')}
        />

        <ModuleComponentWithOutImg
          title="Insectos, arañas y ciempiés"
          background="#f16f6e"
          handleOnPress={() => navigation.navigate('Insectos')}
        />
      </View>
    </ScrollView>

  )
}

export default ModuleActividadesConPadres