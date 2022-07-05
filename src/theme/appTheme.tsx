import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black'
    },
    texto: {
        color: 'white',
        fontSize: 30,
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
    },
    smallResult: {
        color: 'gray',
        fontSize: 30,
        textAlign: 'right'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    button: {
        height: 70,
        width: 70,
        backgroundColor: "#2D2D2D",
        borderRadius: 50,
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    textButton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '600'
    }
})