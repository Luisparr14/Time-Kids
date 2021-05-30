import React from 'react'
import { Linking, Text, View } from 'react-native'
import ComponentRecomendaciones from '../../Components/ComponentRecomendaciones'

const TecnicasDeRelajacion = ({ navigation }) => {
    return (
            <ComponentRecomendaciones
                navigation={navigation}
                title="Tecnicas de relajación"
                description={"Pintar mandalas: \nColorear mandalas tiene muchos beneficios. Entre ellos, promueve la paciencia, desarrolla la concentración y propicia un momento tranquilo ya que es un trabajodelicado.\n\n" +

                    "El robot y el muñeco de trapo: \nEn este ejercicio damos la instrucción de que imaginen que el robot está fabricado con metal y es rígido, mientras que un muñeco de trapo es blando " +
                    "flexible. Después, le decimos que debe hacer de robot de forma que sus músculos se tensen, para después imitar a un muñeco de trapo y dejar que todas sus extremidades se relajen.\n\n" +

                    "Yoga o mindfulness: \nAunque éstos se pueden realizar en edades más tempranas, es a partir de" +
                    "los 7 años cuando más pueden aprovechar estos ejercicios porque pueden prestar más" +
                    "atención. En el caso del yoga, hay ejercicios que replican las posturas de algunos animales por" +
                    "lo que además de relajarse, se divierten\n\n" +

                    "Relajación muscular progresiva de Jacobson: \na partir de los 9 años, e incluso antes, podemos" +
                    "empezar a utilizar esta técnica. Enseñarle al niño a practicarla de forma constante es lo que" +
                    "hará que sea de lo más efectiva.Lo primero, pedimos al niño que se sienta en una posición" +
                    "cómoda y que extienda las manos sobre las rodillas. Al inicio, haremos un entrenamiento" +
                    "dándole la instrucción de cada parte del cuerpo\n\n" +

                    "1. Debe cerrar los puños de las manos muy muy fuerte hasta sentir tensión.\n" +
                    "Después mantenerla durante 10 segundos, y relajar.\n\n" +

                    "2. Hombros: se encogen hasta las orejas, se mantiene la tensión durante 10" +
                    " segundos, y se va liberando poco a poco…\n\n" +
                    "3. Cuello: se lleva al mentón del pecho y después se relaja\n\n" +
                    "4. Boca: se abre la boca, se extiende la lengua, y relajamos\n\n" +
                    "5. Respiración: inspirar profundamente durante unos segundos, y después espirar muy despacio\n\n" +
                    "6. Espalda: se inclina la espalda hacia adelante, se mantiene la posición y se recupera\n\n" +
                    "7. Pies: se estiran los dedos como si quisiéramos ponernos de puntillas, aguantamos y recuperamos la posición"
                }
                alto={1200}
                showButtonBack={true}
            />
    )
}

export default TecnicasDeRelajacion