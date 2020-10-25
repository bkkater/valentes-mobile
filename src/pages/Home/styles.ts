import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3EDE0',
        flex: 1,
        padding: 20
    },
    title: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 20,
        marginTop: 40
    },
    text: {
        fontFamily: 'Ubuntu_400Regular',
    },
    activeButtonStyle: {
        padding: 5,
        paddingRight: 30,
        paddingLeft: 30,
    },
    buttomText: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 17,
    },
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
        marginBottom: 8,
        color: '#333'
    },
    primaryContainerDescription: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 15,
        color: '#333'
    }

})

export default styles;