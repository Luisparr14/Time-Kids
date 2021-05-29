import React from 'react';
import { View, Image, Text, Button, ScrollView, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

// Iconos
import ImgCasa from '../assets/ImgModulos/casa.png'
import ImgConsola from '../assets/ImgModulos/consola.png'
// import ImgVideo from '../assets/ImgModulos/video.png'
import ImgEjercicio from '../assets/ImgModulos/ejercicio.png'
import ImgPensando from '../assets/ImgModulos/pensando.png'
import ImgNotas from '../assets/ImgModulos/notas.png'

const Modules = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPressOut={() => navigation.navigate('AM')} style={[styles.containerModule, { backgroundColor: '#ffe16c' }]}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={ImgCasa}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Actividades Mentales</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Juegos')} style={[styles.containerModule, { backgroundColor: '#06cdb4' }]}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={ImgConsola}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Juegos</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Videos')} style={[styles.containerModule, { backgroundColor: '#c8e265' }]}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Videos</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('EAAL')} style={[styles.containerModule, { backgroundColor: '#ff914d' }]}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={ImgEjercicio}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Ejercicios al aire libre</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ACP')} style={[styles.containerModule, { backgroundColor: '#f16f6e' }]}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={ImgPensando}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Actividades con los padres</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Recomendaciones')} style={[styles.containerModule, { backgroundColor: '#ecd5ff' }]}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={ImgNotas}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Recomendaciones</Text>
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

export default Modules