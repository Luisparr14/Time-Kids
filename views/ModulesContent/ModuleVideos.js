import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

// Iconos

const ModuleVideos = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ffe16c' }]}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Dibujar y colorear</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#06cdb4' }]}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Barquito chiquitoto</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#c8e265' }]}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Toc and roll</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Aprende a leer y escribir</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Fun english</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ffe16c' }]}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Dibujar y colorear</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#06cdb4' }]}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Barquito chiquitoto</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#c8e265' }]}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Toc and roll</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Aprende a leer y escribir</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Fun english</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.containerModule, { backgroundColor: '#ff914d' }]}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/4397/4397630.png' }}></Image>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 40, margin: 20, color: 'black' }} >Fun english</Text>
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