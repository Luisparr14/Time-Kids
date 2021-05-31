import React from 'react'
import { Text, Image, ImageBackground, StyleSheet, TouchableOpacity, View, Pressable } from 'react-native'
import { ButtonBack } from './ButtonsBack-Next-Text'

const VideoButton = ({ navigation, imgBackground, handleOnPress, alto, ancho, showButtonBack, videoTitle, sizeTitle }) => {

    function ShowButton() {
        if (showButtonBack) {
            return (
                <ButtonBack
                    navigation={navigation}
                />
            )
        }
    }

    const styles = StyleSheet.create({
        containerModule: {
            height: 250,
            width: '100%',
            marginBottom: 35,
            marginTop: 20,
            marginBottom: 0,
        }
    })

    return (
        <React.Fragment>
            <Pressable style={[styles.containerModule, { width: ancho || "95%", elevation: 2, zIndex: 10, backgroundColor: 'yellow' }]} onPress={handleOnPress}>
                <ImageBackground
                    resizeMode="cover"
                    imageStyle={{ borderRadius: 25 }}
                    source={imgBackground}
                    style={{ width: ancho || "100%", height: alto || "100%", justifyContent: 'center', borderRadius: 20 }}
                >
                    <Text style={{ textAlign: 'center', width: '100%', textAlignVertical: 'center', backgroundColor: '#00000060', color: 'white', fontSize: sizeTitle || 40, zIndex: -1, position: 'relative', elevation: 1000 }}>{videoTitle}</Text>
                </ImageBackground>
            </Pressable>
            {ShowButton()}
        </React.Fragment>



    )
}

export default VideoButton

{/* <React.Fragment>
<ImageBackground style={{ width: ancho || "97%", height: alto || 230, backgroundColor: 'blue', borderRadius: 20, marginTop: 20, justifyContent: 'center', alignContent: 'center' }}>
    <Text style={{ backgroundColor: '#000000a0',color:'white', textAlign: 'center', position: 'absolute', textAlignVertical:'center',zIndex:100,width:'100%', height:'100%', fontSize:40 }}>Aprende los colores, vocales, números y frútas</Text>
    <TouchableWithoutFeedback onPress={handleOnPress}>
        <Image
            resizeMode='cover'
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
            source={imgBackground}
        />
    </TouchableWithoutFeedback>
</ImageBackground>
{ShowButton()}
</React.Fragment> */}

// <>
// <TouchableWithoutFeedback onPress={()=>console.log('hola')}>
//     <ImageBackground style={{ width: ancho || "97%", height: alto || 230, backgroundColor: 'blue', borderRadius: 20, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
//             <Image
//                 resizeMode='cover'
//                 style={{ width: "100%", height: "100%", borderRadius: 10 }}
//                 source={imgBackground}
//             />
//             <Text style={{ position: 'absolute', backgroundColor: 'red' }}>Hola</Text>
//     </ImageBackground>
// </TouchableWithoutFeedback>
// {ShowButton()}
// </>
{/* <React.Fragment>
<ImageBackground style={{ width: ancho||"97%", height: alto||230, backgroundColor: 'blue', borderRadius:20, marginTop:20, justifyContent:'center'}}>
        <Text style={{backgroundColor:'red'}}>Hola</Text>
    <TouchableWithoutFeedback onPress={()=>console.log('Presiona')}>
        <Image
            resizeMode='cover'
            style={{ width: "100%", height: "100%" ,borderRadius:10}}
            source={imgBackground}
        />
    </TouchableWithoutFeedback>
</ImageBackground>
{ShowButton()}
</React.Fragment> */}