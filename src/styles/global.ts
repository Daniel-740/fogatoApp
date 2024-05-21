import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 'auto',
        width: '90%',
        backgroundColor: '#FFF'
    },
    button: {
        backgroundColor: '#FFDA00'
    },
    textbutton: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#000'
    },
    title: {
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 20,
        fontSize: 30,
        fontWeight: '500'
    },
    detailImage: {
        height: 250,
        width: '100%'
    },
    amount: {
        color: '#000',
        marginVertical: 20,
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default globalStyles;