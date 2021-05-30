import React from 'react'
import { View, Image, Text, ScrollView, StyleSheet,Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../views/ModulesContent/StyleModuleContainer/StyleModuleContainer'
const ModuleComponentWithOutImg = ({title, background,handleOnPress, textSize}) => {
    return (
        <TouchableOpacity style={[styles.containerModule, { backgroundColor: background||'#ffe16c'}]} onPress={handleOnPress}>
            <View style={{ flex: 1, justifyContent:'center', alignContent:'center'}}>
                <Text style={{ fontSize: textSize||40, textAlign:'center', textAlignVertical:'center', margin:10}} >{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ModuleComponentWithOutImg