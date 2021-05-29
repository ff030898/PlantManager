import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },

    header: {
        paddingHorizontal: 30
    },

    title: {
        fontSize: 17,
        color: colors.heading,
        lineHeight: 20,
        marginTop: 15,
        fontFamily: 'Jost_600SemiBold',
    },

    subtitle: {
        fontSize: 17,
        color: colors.heading,
        lineHeight: 20,
        fontFamily: 'Jost_300Light'
    },

    enviromentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginTop: 32,
        paddingHorizontal: 30,
        marginBottom: 10
    },

    plants: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    },

    plantList: {
        paddingVertical: 20,
    }

});

export default styles;