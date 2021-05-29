import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',

    },
    header: {
        alignItems: 'center',
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
       color: colors.subtitle,
       fontFamily: 'Jost_400Regular',
       fontSize: 17,
       marginTop: 20
    },
    emogi: {
        fontSize: 44,
        marginBottom: 30,
    },
   
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    },
    buttonText: {
        fontSize: 16,
        color: colors.white,

    }
});

export default styles;