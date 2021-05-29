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
    emogi: {
        fontSize: 44,
        marginBottom: 30,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 40,
        padding: 10,
        textAlign: 'center'
    },
    input2: {
        borderBottomWidth: 1,
        borderBottomColor: colors.green,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 40,
        padding: 10,
        textAlign: 'center'
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