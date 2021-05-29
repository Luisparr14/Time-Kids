import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    textInfo: {
        margin: 25,
        fontSize: 20,
        textAlign: 'justify',
    },
    text: {
        flex: 0.8,
        color: '#fff',
        fontSize: 30,
        width: '100%',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#aaa',
        width: 200,
        height: 45,
        marginBottom: 10,
        marginTop: 10
    }
})
export default styles