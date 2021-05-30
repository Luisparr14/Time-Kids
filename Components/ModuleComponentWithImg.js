import React from 'react'
import { View, Image, Text, ScrollView, StyleSheet,Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../views/ModuleContainer/StyleModuleContainer/StyleModuleContainer'
const ModuleComponentWithImg = ({title, background,handleOnPress, textSize,img}) => {
    return (
        <TouchableOpacity onPress={handleOnPress} style={[styles.containerModule, { backgroundColor: background||'#ffe16c' }]}>
          <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={img}></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.text,{ fontSize: textSize||40}]} >{title}</Text>
          </View>
        </TouchableOpacity>
    )
}

export default ModuleComponentWithImg