import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet,Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

// Iconos

const ModuleEjercicios = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ffe16c' }]} onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=gxNgnGiRupo&feature=emb_logo')}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Carrera con sacos/costales</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#06cdb4' }]} onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=DOTy0MI7Zxo')}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Carreras de tres piernas</Text>
          </View>
        </TouchableOpacity>
        
          {/*Es una app IOS */}
        <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#c8e265' }]} onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=moHHLQGGGxw&feature=emb_imp_woyt')}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Juego de tirar a la cuerda</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]} onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=poX-8yyH5xw')}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Bolos con botellas de plástico</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]} onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=sMztRKF0v3A&feature=emb_imp_woyt')}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >La gallinita ciega</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]} onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=nHWUSxlaasg')}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Avioncito/rayuela</Text>
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

export default ModuleEjercicios