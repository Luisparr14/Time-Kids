
import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet,Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
// Iconos

const ModuleActividadesConPadres = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#06cdb4' }]} onPress={()=>navigation.navigate('LaColmena')}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >La colmena</Text>
          </View>
        </TouchableOpacity>
        
          {/*Es una app IOS */}
        <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#c8e265' }]} onPress={()=>navigation.navigate('CCH')}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >El castillo de cuento de hadas</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]} onPress={()=>navigation.navigate('PortaLapices')}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Portalápices</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]} onPress={()=>navigation.navigate('Pulseras')}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Pulseras y brazalete</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]} onPress={()=>navigation.navigate('Gallina')}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >La gallina porta huevos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]} onPress={()=>navigation.navigate('Insectos')}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Insectos, arañas y ciempiés</Text>
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

export default ModuleActividadesConPadres