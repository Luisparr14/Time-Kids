import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import styles from './Styles/ModulesStyles'

const ActividadesConPadres = ({ navigation }) => {

    return (
        <ScrollView>
                <Text style={[styles.textInfo, {height:1100}]}>
                    Jugar con niños tiene beneficios tanto para los padres como para los hijos. El aprendizaje durante el
                    juego con niños es mutuo. Los padres aprenden más cosas sobre sus hijos mientras que estos aprenden
                    los valores que se generan durante el juego como compartir. Además, los más pequeños ganarán en
                    tolerancia, imaginación y felicidad.El juego con niños potenciará las relaciones interfamiliares y la
                    autoestima del niño. {'\n\n'}La autoconfianza del hijo aumenta si sus padres juegan con él. Además, jugar
                    con niños favorece las habilidades sociales y emocionales. La familia supone el primer contacto del
                    niño con el mundo exterior. También es en la familia en la que el niño se forma una primera imagen
                    de sí mismo.{'\n\n'}Son sin duda algo más que simples manualidades, mejor llamarlo proyectos creativos. Llevar a cabo
                    un proyecto juntos también es una forma de crear y desarrollar la relación entre el adulto y el niño,
                    teniendo algo especial que hacer juntos.{'\n\n'} Algunos ejemplos:{'\n\n'}
                    ➢ Construir una casa de muñecas (o tortugas ninjas, o una granja): pega unas cajas de zapatos,
                    recorta las ventanas y luego pinta y decora con tela, plastilina o acuarelas.{'\n\n'}
                    ➢ Construir una colección de banderas con palos y papel.{'\n\n'}
                    ➢ Escribir un libro o un cómic con historias inventadas juntos.{'\n\n'}
                    ➢ Crear un diario secreto. Utiliza una libreta con una tapa dura, cintas para cerrarla y decora con
                    marcos, pegatinas o dibujos.{'\n\n'}
                    ➢ Hacer un rompecabezas casero. Imprime desde Internet o recorta una foto de un periódico,
                    pégala sobre un pedazo de cartón y luego córtala en trozos pequeños.{'\n\n'}
                    ➢ Construir una caja de recuerdos (tesoros, o juguetes favoritos): personalizar una caja con
                    colores, acuarelas, calcomanías. El niño podrá meter aquella concha que encontró en el mar,
                    la entrada de la película que vio en el cine y todos sus recuerdos especiales.{'\n\n'}
                </Text>

                <View style={[styles.buttonContainer, {marginBottom:60}]}>
                    
                    <TouchableWithoutFeedback style={styles.button} >
                        <Text style={styles.text}>CONTINUAR</Text>
                        <View style={{ justifyContent: 'center', width: 20, height: '100%', flex: 0.2 }}>
                            <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/271/271226.png' }}></Image>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback style={styles.button} onPress={() => navigation.goBack()}>
                        <View style={{ justifyContent: 'center', width: 20, height: '100%', flex: 0.08 }}>
                            <Image style={{ width: 30, height: 30, position: 'relative', left: 10 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/709/709624.png' }}></Image>
                        </View>
                        <Text style={styles.text}>VOLVER</Text>
                    </TouchableWithoutFeedback>
                </View>
        </ScrollView>
    )
}

export default ActividadesConPadres