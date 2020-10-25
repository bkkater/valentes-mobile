import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        padding: 15,
        backgroundColor: '#F2AB27',
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    buttonText: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#FFF'
    },
})

export default styles;