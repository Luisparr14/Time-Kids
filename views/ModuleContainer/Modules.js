import React from 'react';
import { View,ScrollView } from 'react-native'

// Iconos
import ImgCasa from '../../assets/ImgModulos/casa.png'
import ImgConsola from '../../assets/ImgModulos/consola.png'
// import ImgVideo from '../assets/ImgModulos/video.png'
import ImgEjercicio from '../../assets/ImgModulos/ejercicio.png'
import ImgPensando from '../../assets/ImgModulos/pensando.png'
import ImgNotas from '../../assets/ImgModulos/notas.png'
import ModuleComponentWithImg from '../../Components/ModuleComponentWithImg';

const Modules = ({ navigation }) => {

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ModuleComponentWithImg
          title="Actividades Mentales"
          img={ImgCasa}
          background="#ffe16c"
          handleOnPress={() => navigation.navigate('AM')}
        />

        <ModuleComponentWithImg
          title="Juegos"
          img={ImgConsola}
          background="#06cdb4"
          handleOnPress={() => navigation.navigate('Juegos')}
        />

        <ModuleComponentWithImg
          title="Videos"
          img={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}
          background="#c8e265"
          handleOnPress={() => navigation.navigate('Videos')}
        />

        <ModuleComponentWithImg
          title="Ejercicios al aire libre"
          img={ImgEjercicio}
          background="#ff914d"
          handleOnPress={() => navigation.navigate('EAAL')}
        />

        <ModuleComponentWithImg
          title="Actividades con los padres"
          img={ImgPensando}
          background="#f16f6e"
          handleOnPress={() => navigation.navigate('ACP')}
        />

        <ModuleComponentWithImg
          title="Recomendaciones"
          img={ImgNotas}
          background="#ecd5ff"
          handleOnPress={() => navigation.navigate('Recomendaciones')}
          textSize={32}
        />

      </View>
    </ScrollView>

  )
}

export default Modules