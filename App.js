import 'react-native-gesture-handler';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import { Text } from 'react-native'

//Views
import Modules from './views/ModuleContainer/Modules'
import IndexPage from './views/IndexPage'
import Login from './views/Login'

import ActividadesMentales from './views/Modules/ActividadesMentales';
import Juegos from './views/Modules/Juegos';
import Videos from './views/Modules/Videos';
import EjercicioAlAireLibre from './views/Modules/EjercicioAlAireLibre';
import ActividadesConPadres from './views/Modules/ActividadesConPadres';
import Recomendaciones from './views/Modules/Recomendaciones';


import ModuleActividadesMentales from './views/ModulesContent/ModuleActividadesMentales';
import ModuleJuegos from './views/ModulesContent/ModuleJuegos';
import ModuleVideos from './views/ModulesContent/ModuleVideos';
import ModuleEjercicios from './views/ModulesContent/ModuleEjercicios';
import ModuleActividadesConPadres from './views/ModulesContent/ModuleActividadesConPadres';

// contenido ACP
import LaColmena from './views/ActividadConPadresContent/LaColmena';
import CastilloDelCuentoDeHadas from './views/ActividadConPadresContent/CastilloDelCuentoDeHadas';
import PortaLapices from './views/ActividadConPadresContent/PortaLapices';
import PulserasYBrazaletes from './views/ActividadConPadresContent/PulserasYBrazaletes';
import LaGallinaPortaHuevos from './views/ActividadConPadresContent/LaGallinaPortaHuevos';
import InsectoAraña from './views/ActividadConPadresContent/InsectoAraña';

// contendio RECOMENDACIONES
import CronogramaDeActividades from './views/RecomendacionesContent/CronogramaDeActividades';
import TecnicasDeRelajacion from './views/RecomendacionesContent/TecnicasDeRelajacion';
import JugueteAntiestres from './views/RecomendacionesContent/JugueteAntiestres';
import Terapia from './views/RecomendacionesContent/Terapia';
import { useState } from 'react';


const Stack = createStackNavigator();

const Details = () => {
  return (
    <Text style={{ fontSize: 30 }}>actividades Mentales</Text>
  )
}

const App = () => {

  const [login,setLogin]=useState(false)
  console.log("apps state", login);
  
  let initialRute='Inicio'

  if(login){
    initialRute='Modules'
  }else{initialRute='Inicio'

  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerLeft:false
      }}

      initialRouteName={initialRute}
      >

        {/*Login/Inicio*/}
        <Stack.Screen name="Inicio" component={IndexPage}  options={{ headerTitleStyle: { alignSelf: 'center' } }} />
        <Stack.Screen name="Login" component={Login} options={{ title: "Iniciar sesion", headerTitleStyle: { textAlign:'center' } }} />


        {/*Modules*/}
        <Stack.Screen name="Modules" component={Modules} options={{ title: "Modulos", headerTitleStyle: { textAlign:'center' } }} />

        {/*Views of modules*/}
        <Stack.Screen name="AM" component={ActividadesMentales} options={{ title: "Actividades Mentales", headerTitleStyle: { textAlign:'center' } }} />
        <Stack.Screen name="Juegos" component={Juegos} options={{ title: "Juegos", headerTitleStyle: { textAlign:'center' } }} />
        <Stack.Screen name="Videos" component={Videos} options={{ title: "Videos", headerTitleStyle: { textAlign:'center' } }} />
        <Stack.Screen name="EAAL" component={EjercicioAlAireLibre} options={{ title: "Ejercicios al aire libre" , headerTitleStyle: { textAlign:'center' } }} />
        <Stack.Screen name="ACP" component={ActividadesConPadres} options={{ title: "Actividades con los padres" , headerTitleStyle: { textAlign:'center' } }} />
        <Stack.Screen name="Recomendaciones" component={Recomendaciones} options={{ title: "Recomendaciones" , headerTitleStyle: { textAlign:'center' } }} />

        {/* ActividadesMentales-Vista */}
        <Stack.Screen name="ViewAM" component={ModuleActividadesMentales} options={{ title: "Actividades Mentales" , headerTitleStyle: { textAlign:'center' } }} />
        <Stack.Screen name="ViewJuegos" component={ModuleJuegos} options={{ title: "Juegos" , headerTitleStyle: { textAlign:'center' } }} />
        <Stack.Screen name="ViewVideos" component={ModuleVideos} options={{ title: "Videos" , headerTitleStyle: { textAlign:'center' } }} />
        <Stack.Screen name="ViewEjercicios" component={ModuleEjercicios} options={{ title: "Ejercicios al aire libre" , headerTitleStyle: { textAlign:'center' } }} />
        <Stack.Screen name="ViewACP" component={ModuleActividadesConPadres} options={{ title: "Actividad con Padres" , headerTitleStyle: { textAlign:'center' } }} />

        {/* Contenido de actividad con padres */}
        <Stack.Screen name="LaColmena" component={LaColmena} options={{ title: "La Colmena" , headerTitleStyle: { textAlign:'center' } }} />
        <Stack.Screen name="CCH" component={CastilloDelCuentoDeHadas} options={{ title: "El Castillo del cuento de hadas" , headerTitleStyle: { textAlign:'center' } }} />
        <Stack.Screen name="PortaLapices" component={PortaLapices} options={{ title: "Portalapices" , headerTitleStyle: { textAlign:'center' } }} />
        <Stack.Screen name="Pulseras" component={PulserasYBrazaletes} options={{ title: "Pulseras y brazalete" , headerTitleStyle: { textAlign:'center' } }} />
        <Stack.Screen name="Gallina" component={LaGallinaPortaHuevos} options={{ title: "La gallina porta huevos" , headerTitleStyle: { textAlign:'center' } }} />
        <Stack.Screen name="Insectos" component={InsectoAraña} options={{ title: "Insectos, arañas y ciempiés" , headerTitleStyle: { textAlign:'center' } }} />

        {/* Contenido Recomendaciones */}
        <Stack.Screen name="Cronograma" component={CronogramaDeActividades} options={{ title: "Cronograma de actividades" , headerTitleStyle: { textAlign:'center' } }} />
        <Stack.Screen name="TecnicasRelajacion" component={TecnicasDeRelajacion} options={{ title: "Tecnicas de relajación" , headerTitleStyle: { textAlign:'center' } }} />
        <Stack.Screen name="Juguete" component={JugueteAntiestres} options={{ title: "Juguete Antiestrés" , headerTitleStyle: { textAlign:'center' } }} />
        <Stack.Screen name="Terapia" component={Terapia} options={{ title: "Terapia Psicologica" , headerTitleStyle: { textAlign:'center' } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//onPress={()=>Linking.openURL('')}
export default App
