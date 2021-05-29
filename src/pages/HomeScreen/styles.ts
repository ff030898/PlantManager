import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 30
    },

    title: {
        fontSize: 28,
        lineHeight: 38,
        paddingTop: 30,
        color: colors.heading,
        fontFamily: 'Jost_600SemiBold',
        fontWeight: '600',
        textAlign: 'center'
    },

    image: {
        height: Dimensions.get('window').width * 0.7
    },

    subtitle: {
        color: colors.subtitle,
        fontFamily: 'Jost_400Regular',
        fontSize: 17,
        lineHeight: 25,
        textAlign: 'center'
    },

    button: {
        width: 56,
        height: 56,
        backgroundColor: colors.green,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    buttonIcon: {
        fontSize: 32,
        color: colors.white
    }

});

export default styles;