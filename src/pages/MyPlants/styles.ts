import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        backgroundColor: colors.background
    },
    
    spotLight: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        paddingHorizontal: 20,
        borderRadius: 20,
        height: 110,
    },
    spotLightImage: {
        width: 60,
        height: 60
    },
    spotLightText: {
        flex: 1,
        marginHorizontal: 20,
        fontFamily: 'Jost_400Regular',
        fontSize: 15,
        color: colors.blue,
        textAlign: 'justify'
    },
    plants: {
        flex: 1,
        width: '100%',
        marginTop: 30
    },
    plantsTitle: {
        fontFamily: 'Jost_600SemiBold',
        color: colors.heading,
        fontSize: 24,
        marginBottom: 20
    }

});

export default styles;