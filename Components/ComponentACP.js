import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import styles from '../views/ActividadConPadresContent//StylesACP/stylesACP'

const ComponentACP = ({ navigation,img, description,title,alto}) => {

    return (
        <ScrollView>
            <Text style={{ fontSize: 30, textAlign: 'center', width: '100%', marginTop: 20 }}> {title}</Text>
            <Text style={[styles.textInfo, { height: alto }]}>
                {description}
            </Text>
            <Image source={img} style={[styles.img,{resizeMode:'contain'}]}/>
            <View style={[styles.buttonContainer, { marginBottom: 60 }]}>
                <TouchableWithoutFeedback style={styles.button} onPress={() => navigation.goBack()}>
                    <View style={{ justifyContent: 'center', width: 20, height: '100%', flex: 0.08 }}>
                        <Image style={{width: 30, height: 30, position: 'relative', left: 10 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/709/709624.png' }}></Image>
                    </View>
                    <Text style={styles.text}>VOLVER</Text>
                </TouchableWithoutFeedback>
            </View>
        </ScrollView>
    )
}

export default ComponentACP