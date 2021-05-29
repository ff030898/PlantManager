import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.shape,
        marginVertical: 10
    },

    title: {
        flex: 1,
        marginLeft: 10,
        fontFamily: 'Jost_600SemiBold',
        fontSize: 17,
        color: colors.heading
    },

    details: {
        alignItems: 'flex-end',
        paddingRight: 10
    },

    timeLabel: {
        marginTop: 5,
        fontSize: 13,
        fontFamily: 'Jost_400Regular',
        color: colors.body_light
    },

    time: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: 'Jost_600SemiBold',
        color: colors.body_dark
    },

    buttonRemove: {
        width: 100,
        height: 85,
        backgroundColor: colors.red,
        marginTop: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: 20,
        paddingLeft: 15
    }
});

export default styles;