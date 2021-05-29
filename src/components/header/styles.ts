
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),

  },

  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: 'Jost_300Light'
  },

  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: 'Jost_600SemiBold',
    lineHeight: 40
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  }
});

export default styles;