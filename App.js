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
import Register from './views/Register'

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
        <Stack.Screen name="Inicio" component={IndexPage} options={{ headerTitleStyle: { alignSelf: 'center' } }} />
        <Stack.Screen name="Modules" component={Modules} options={{ title: "Modulos", headerTitleStyle: { position: 'relative', left: 100 } }} />
        <Stack.Screen name="Login" component={Login} options={{ title: "Iniciar sesion", headerTitleStyle: { position: 'relative', left: 80 } }}/>
        <Stack.Screen name="Register" component={Register} options={{ title: "Registro", headerTitleStyle: { position: 'relative', left: 80 } }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
