import React from 'react';
import { View, Image, Text, Button, ScrollView, StyleSheet } from 'react-native'

const Modules = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView alwaysBounceVertical={true}>
        <View style={styles.containerModule}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://images.vexels.com/media/users/3/205506/isolated/preview/c716bef5dd30557cdc6a7402fb4b8ddf-mochila-escolar-plana-roja-by-vexels.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Actividades Mentales</Text>
          </View>
        </View>
        <View style={styles.containerModule}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://img-premium.flaticon.com/png/512/1399/1399069.png?token=exp=1622218825~hmac=fbbd2d7c65502f6c29ec20de0080d250' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Juegos</Text>
          </View>
        </View>
        <View style={styles.containerModule}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Videos</Text>
          </View>
        </View>
        <View style={styles.containerModule}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/2983/2983413.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Ejercicios al aire libre</Text>
          </View>
        </View>
        <View style={styles.containerModule}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/2983/2983413.png' }}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Actividades con los padres</Text>
          </View>
        </View>
      </ScrollView>

    </View>

  )
}

const styles = StyleSheet.create({
  containerModule: {
    height: 150, 
    width: 350,
    marginBottom: 35,
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: '#aaf6f5', 
    marginTop:50, 
    marginBottom:0
  }
})

export default Modules