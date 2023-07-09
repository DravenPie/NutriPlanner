import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { defaultContainer } from '@styles/global';
import { moderateScale } from '@styles/metrics';
import { padding } from '@styles/global';

const styles = StyleSheet.create({
  container: {
    ...defaultContainer(),

    backgroundColor: colors.lightGreen,
    alignItems: 'center'
  },

  view: {
    width: '100%',
    ...padding(0, 0, 20, 0),
  },
  viewHeader: {
    ...padding(0, 0, 10, 0),
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: colors.black,
  },

  mainContainer: {
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(5),
    borderColor: colors.lightGrey,

    elevation: moderateScale(1),
    shadowColor: colors.black,
  }
});

export default styles;
