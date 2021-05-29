import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        height: 40,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginRight: 10,
    },

    containerActive: {
        backgroundColor: colors.green_light
    },

    title: {
        color: colors.heading,
        fontFamily: 'Jost_600SemiBold',
    },

    titleActive: {
        color: colors.green_dark,
        fontFamily: 'Jost_600SemiBold'

    }

});

export default styles;