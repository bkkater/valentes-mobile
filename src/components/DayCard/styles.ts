import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2AB27',
        width: 90,
        height: 90,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.40,
        shadowRadius: 3.84,

        elevation: 5,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    dayMonth: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#FFF',
        fontSize: 40
    },
    dayLabel: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#FFF',
        fontSize: 16
    },

})

export default styles;