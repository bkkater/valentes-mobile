import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        padding: 0,
        paddingLeft: '30%'
    },
    modalView: {
        backgroundColor: '#F3EDE0',
        padding: 20,
        paddingRight: 40,
        height: "100%",
        width: "100%",
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    menuText: {
        marginLeft: 20,
        marginBottom: 2,
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 18
    },
    hr: {
        borderBottomWidth: 2,
        borderBottomColor: '#F2E2C4',
        marginBottom: 30, 
        marginTop: 10, 
        borderRadius: 5,

        width: '80%',
        alignSelf: 'center',
    }
})

export default styles;