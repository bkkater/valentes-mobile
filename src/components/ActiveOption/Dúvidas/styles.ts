import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    primaryContainer: {
        padding: 20,
        backgroundColor: 'rgba(242, 140, 15, 0.26)',
        borderRadius: 5
    },
    hr: {
        borderBottomColor: '#B66604',
        borderBottomWidth: 1,
        marginTop: 10
    },
    primaryContainerTitle: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 17,
        
        color: '#333'
    },
    primaryContainerDescription: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 15,
        color: '#333',
        marginTop: 8,
    },
    inputContainer: {

    },
    icon: {
        position: "absolute",
        bottom: 50,
        right: 10
    },
    title: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 17,
    }
})

export default styles;