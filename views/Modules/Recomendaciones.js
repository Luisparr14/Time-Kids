import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import styles from './Styles/ModulesStyles'
const Recomendaciones = ({ navigation }) => {

    return (
        <ScrollView>
            {/* <View style={[styles.buttonContainer, {marginTop:110}]}>
                <TouchableWithoutFeedback style={styles.button} >
                    <Text style={styles.text}>CONTINUAR</Text>
                    <View style={{justifyContent:'center',width: 20,height: '100%',flex: 0.2}}>
                        <Image style={{width:30, height:30}} source={{ uri: 'https://image.flaticon.com/icons/png/512/271/271226.png' }}></Image>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback style={styles.button} onPress={() => navigation.goBack()}>
                    <View style={{justifyContent:'center',width: 20,height: '100%',flex: 0.08}}>
                            <Image style={{width:30, height:30, position:'relative', left:10}} source={{ uri: 'https://image.flaticon.com/icons/png/512/709/709624.png' }}></Image>
                    </View>
                    <Text style={styles.text}>VOLVER</Text>
                </TouchableWithoutFeedback>
            </View> */}
        </ScrollView>
    )
}


export default Recomendaciones