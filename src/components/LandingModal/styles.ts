import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    contentText: {
        marginBottom: 40,
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 20,
        color: '#333333',
    },
    inputContainer: {
        position: "relative",
        bottom: -10,
        marginBottom: 20,
    },
    icon: {
        position: "absolute",
        bottom: 50,
        right: 10
    },
    hr: {
        borderBottomWidth: 1,
        borderColor: '#B66604',
        marginTop: 20,
        marginBottom: 40
    },
    placeholder: {
        position: "absolute",
        bottom: 55,
        left: 10,
        fontFamily: 'Ubuntu_400Regular',
        color: '#888'
    },
    centeredView: {
        flex: 1,
    },
    modalView: {
        backgroundColor: '#F3EDE0',
        padding: 20,
        paddingRight: 40,
        height: "100%",
        width: "100%",
        justifyContent: 'space-between'
    },
    buttons: {
        flexDirection: 'row',
        marginBottom: 20
    },
    goBackButton: {
        padding: 15,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
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
    iconContainer: {
        backgroundColor: '#F2AB27',
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        width: 45,
        height: 45,
    }


})

export default styles;