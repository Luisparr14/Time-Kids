import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from '../views/ModulesContent/StyleModuleContainer/StyleModuleContainer'
const ModuleComponentWithOutImg = ({title, background,handleOnPress, textSize,ancho,alto}) => {
    return (
        <Pressable style={[styles.containerModule, { backgroundColor: background||'#ffe16c', width:ancho||350,height:alto||150}]} onPress={handleOnPress}>
            <View style={{ flex: 1, justifyContent:'center', alignContent:'center'}}>
                <Text style={{ fontSize: textSize||40, textAlign:'center', textAlignVertical:'center', margin:10}} >{title}</Text>
            </View>
        </Pressable>
    )
}

export default ModuleComponentWithOutImg