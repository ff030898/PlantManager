import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    title: {
        textAlign: 'center',
        color: colors.heading,
        fontFamily: 'Jost_600SemiBold',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 32
    },
    subtitle: {
       fontFamily: 'Jost_400Regular',
       margin: 30,
       fontSize: 17,
       textAlign: 'center',
       color: colors.subtitle
    },
    emogi: {
        fontSize: 100,
        marginBottom: 30,
    },

    buttonText: {
        fontSize: 16,
        color: colors.white,
        paddingHorizontal: 30,

    }

});

export default styles;