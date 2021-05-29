import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet,Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

// Iconos

const ModuleActividadesMentales = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ffe16c' }]} onPress={()=>Linking.openURL('https://www.mundoprimaria.com/juegos-educativos/juegos-de-memoria-infantiles/juegos-de-ordenar')}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Juego de Ordenar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#06cdb4' }]} onPress={()=>Linking.openURL('https://apps.apple.com/es/app/shape-builder-preschool-learning/id306572986?ign-mpt=uo%3D6')}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Juego de puzzles</Text>
          </View>
        </TouchableOpacity>
        
          {/*Es una app IOS */}
        <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#c8e265' }]} onPress={()=>Linking.openURL('https://www.mundoprimaria.com/juegos-educativos/juegos-de-memoria-infantiles/primaria-donde-estan')}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Juego de memoria</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]} onPress={()=>Linking.openURL('https://www.mundoprimaria.com/juegos-educativos/juegos-de-letras/juegos-de-vocabulario')}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Juego de vocabulario</Text>
          </View>
        </TouchableOpacity>
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