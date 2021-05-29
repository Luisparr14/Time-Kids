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

const Stack = createStackNavigator();

const Details = () => {
  return (
    <Text style={{ fontSize: 30 }}>actividades Mentales</Text>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*Login/Register*/}
        <Stack.Screen name="Inicio" component={IndexPage} options={{ headerTitleStyle: { alignSelf: 'center' } }} />
        <Stack.Screen name="Login" component={Login} options={{ title: "Iniciar sesion"}}/>
        

        {/*Modules*/}
        <Stack.Screen name="Modules" component={Modules} options={{ title: "Modulos"}} />

        {/*Views of modules*/}
        <Stack.Screen name="AM" component={ActividadesMentales} options={{ title: "Actividades Mentales", headerTitleStyle: { position: 'relative', left: 40 } }} />
        <Stack.Screen name="Juegos" component={Juegos} options={{ title: "Juegos"}} />
        <Stack.Screen name="Videos" component={Videos} options={{ title: "Videos"}} />
        <Stack.Screen name="EAAL" component={EjercicioAlAireLibre} options={{ title: "Ejercicios al aire libre"}} /> 
        <Stack.Screen name="ACP" component={ActividadesConPadres} options={{ title: "Actividades con los padres"}} />
        <Stack.Screen name="Recomendaciones" component={Recomendaciones} options={{ title: "Recomendaciones"}} />

        {/* ActividadesMentales-Vista */}
        <Stack.Screen name="ViewAM" component={ModuleActividadesMentales} options={{ title: "Actividades Mentales"}} />
        <Stack.Screen name="ViewJuegos" component={ModuleJuegos} options={{ title: "Juegos"}} />
        <Stack.Screen name="ViewVideos" component={ModuleVideos} options={{ title: "Videos"}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
