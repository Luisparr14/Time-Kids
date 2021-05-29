import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet,Linking} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

// Iconos

const ModuleVideos = ({ navigation , props}) => {

    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                
                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ffe16c' }]}  onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=zLUcGwJ2t0U')}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 30, margin: 20, color: 'black' }} >Aprende las colores, vocales, números y frútas</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#06cdb4' }]}  onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=9xMWgEZEEow')} >
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Cuentos infantiles para niños</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#c8e265' }]}  onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=DcDtWGu2b3A')}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Cómo Dibujar Los Números</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]} onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=lo9T9zjOXOQ')}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40, margin: 20, color: 'black' }}>Colorear los planetas</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]} onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=GWS14nnIMXs')}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40, margin: 20, color: 'black' }} > Mezclar los colores</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ffe16c' }]} onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=IP6EvXo42ag')}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 30, margin: 20, color: 'black' }} >Cómo hacer cerditos con material reciclado</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#06cdb4' }]} onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=BeOJKnXwah4')}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 30, margin: 20, color: 'black' }} >Cómo hacer un robot con material reciclado</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#c8e265' }]} onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=ISKf4g5gI7g')}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 35, margin: 20, color: 'black' }} >A prepararse para dormir</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]} onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=Qcz3ep7XWWI')}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Aprende las profesiones</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]} onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=ZzATGDMNKYw')}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >El sistema circulatorio</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]} onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=IhO5Je1Puyw')}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 35, margin: 20, color: 'black' }} >Los sentidos</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]} onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=LtDpx5HCG_Y')}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 35, margin: 20, color: 'black' }} >La cadena alimenticia</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]} onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=fOYM6mZjIrc')}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 30, margin: 20, color: 'black' }} >Animales Herbívoros, Carnívoros y Omnívoros</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    containerModule: {
        height: 150,
        width: 350,
        marginBottom: 35,
        borderRadius: 20,
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
    }
})

export default ModuleVideos