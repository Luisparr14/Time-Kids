import React from 'react';
import { View,ScrollView} from 'react-native'
import ModuleComponentWithOutImg from '../../Components/ModuleComponentWithOutImg';

// Iconos

const ModuleEjercicios = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ModuleComponentWithOutImg 
        title="Cronograma de actividades"
        textSize={30}
        background="#ffe16c"
        />

        <ModuleComponentWithOutImg 
        title="Tecnicas de Relajación"
        textSize={30}
        />
        
        <ModuleComponentWithOutImg 
        title="Juguetes antiestrés"
        textSize={30}
        background="#ffe16c"
        />
        
        <ModuleComponentWithOutImg 
        title="Terapia psicológica"
        textSize={30}
        background="#ffe16c"
        />
      </View>
    </ScrollView>

  )
}


export default ModuleEjercicios