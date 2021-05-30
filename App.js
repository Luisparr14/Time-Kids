import 'react-native-gesture-handler';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import { View, Image, Text } from 'react-native'

//Views
import Modules from './views/Modules'
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

const Stack = createStackNavigator();

const Details = () => {
  return (
    <Text style={{ fontSize: 30 }}>actividades Mentales</Text>
  )
}

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerLeft:false
      }}>

        {/*Login/Register*/}
        <Stack.Screen name="Inicio" component={IndexPage} options={{ headerTitleStyle: { alignSelf: 'center' } }} />
        <Stack.Screen name="Login" component={Login} options={{ title: "Iniciar sesion" }} />


        {/*Modules*/}
        <Stack.Screen name="Modules" component={Modules} options={{ title: "Modulos" }} />

        {/*Views of modules*/}
        <Stack.Screen name="AM" component={ActividadesMentales} options={{ title: "Actividades Mentales", headerTitleStyle: { alignSelf:'center' } }} />
        <Stack.Screen name="Juegos" component={Juegos} options={{ title: "Juegos" }} />
        <Stack.Screen name="Videos" component={Videos} options={{ title: "Videos" }} />
        <Stack.Screen name="EAAL" component={EjercicioAlAireLibre} options={{ title: "Ejercicios al aire libre" }} />
        <Stack.Screen name="ACP" component={ActividadesConPadres} options={{ title: "Actividades con los padres" }} />
        <Stack.Screen name="Recomendaciones" component={Recomendaciones} options={{ title: "Recomendaciones" }} />

        {/* ActividadesMentales-Vista */}
        <Stack.Screen name="ViewAM" component={ModuleActividadesMentales} options={{ title: "Actividades Mentales" }} />
        <Stack.Screen name="ViewJuegos" component={ModuleJuegos} options={{ title: "Juegos" }} />
        <Stack.Screen name="ViewVideos" component={ModuleVideos} options={{ title: "Videos" }} />
        <Stack.Screen name="ViewEjercicios" component={ModuleEjercicios} options={{ title: "Ejercicios al aire libre" }} />
        <Stack.Screen name="ViewACP" component={ModuleActividadesConPadres} options={{ title: "Actividad con Padres" }} />

        {/* Contenido de actividad con padres */}
        <Stack.Screen name="LaColmena" component={LaColmena} options={{ title: "La Colmena" }} />
        <Stack.Screen name="CCH" component={CastilloDelCuentoDeHadas} options={{ title: "El Castillo del cuento de hadas" }} />
        <Stack.Screen name="PortaLapices" component={PortaLapices} options={{ title: "Portalapices" }} />
        <Stack.Screen name="Pulseras" component={PulserasYBrazaletes} options={{ title: "Pulseras y brazalete" }} />
        <Stack.Screen name="Gallina" component={LaGallinaPortaHuevos} options={{ title: "La gallina porta huevos" }} />
        <Stack.Screen name="Insectos" component={InsectoAraña} options={{ title: "Insectos, arañas y ciempiés" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//onPress={()=>Linking.openURL('')}
export default App
