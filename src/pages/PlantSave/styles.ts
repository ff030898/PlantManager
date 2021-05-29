import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.shape,
        justifyContent: 'space-between'
    },

    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: colors.shape
    },
    controller: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: getBottomSpace() || 20

    },

    plantName: {
        fontSize: 24,
        color: colors.heading,
        fontFamily: 'Jost_600SemiBold',
    },

    plantAbout: {
        textAlign: 'center',
        fontFamily: 'Jost_400Regular',
        fontSize: 17,
        color: colors.heading,
        marginTop: 10
    },

    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        bottom: 60
    },
    tipImage: {
        width: 56,
        height: 56,
    },
    tipText: {
        flex: 1,
        marginHorizontal: 20,
        fontFamily: 'Jost_400Regular',
        fontSize: 15,
        color: colors.blue,
        textAlign: 'justify'
    },
    alertLabel: {
     textAlign: 'center',
     fontFamily: 'Jost_400Regular',
     fontSize: 13,
     color: colors.heading,
     marginBottom: 5
     
    },

    buttonText: {
       fontFamily: 'Jost_500Medium',
       color: colors.white,
       fontSize: 17,
       fontStyle: 'normal',
       fontWeight: '500'
    },

    dateTimePickerButton: {
           width: '100%',
           alignItems: 'center',
           paddingVertical: 40
    },

    dateTimePickerText: {
        color: colors.heading,
        fontSize: 24,
        fontFamily: 'Jost_500Medium',
    }

});

export default styles;