import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import styles from '../views/ActividadConPadresContent//StylesACP/stylesACP'
import { ButtonBack } from './ButtonsBack-Next-Text'
import { GenericButton } from './GenericButton'


const ComponentRecomendaciones = ({description, title, alto, showButton,showButtonBack,boothButton,handleoOnPress,titleButton, alineacion,navigation}) => {
function showButtonInScreen(){
    if (showButton) {
        return (
            <View style={[styles.buttonContainer, { marginBottom: 60 }]}>
                <GenericButton
                    handleOnPress={handleoOnPress}
                    titleButton={titleButton}
                    ancho={250}
                />
            </View>
        )
    }
}
function ButtonB() {
    if (showButtonBack) {
        return(
            <View style={[styles.buttonContainer, { marginBottom: 60 }]}>
                <ButtonBack
                navigation={navigation}
                />
            </View>
        )
    }
}

function ShowBoothButton() {
    if(boothButton){
        return(
            <View style={[styles.buttonContainer, { marginBottom: 60 }]}>
            <GenericButton
                handleOnPress={handleoOnPress}
                titleButton={titleButton}
                ancho={250}
            />
            <ButtonBack
                navigation={navigation}
                />
        </View>
        )
    }
}

    return (
        <ScrollView>
            <Text style={{ fontSize: 30, textAlign: 'center', width: '100%', marginTop: 20 }}> {title}</Text>
            <Text style={[styles.textInfo, { height: alto, textAlign:alineacion||'justify'}]}>
                {description}
            </Text>
            {ShowBoothButton()}
            {showButtonInScreen()}
            {ButtonB()}
        </ScrollView>
    )
}

export default ComponentRecomendaciones