import { defaultContainer, padding } from '@styles/global';
import { moderateScale, verticalScale } from '@styles/metrics';

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';

const styles = StyleSheet.create({
  container: {
    ...defaultContainer(),
    
    backgroundColor: colors.lightGreen,
  },

  header: {
    height: verticalScale(90),
    justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: moderateScale(25),
    color: colors.darkGreen,
  },

  formView: {
    height: verticalScale(385),
    paddingTop: verticalScale(40),
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  footer: {
    height: verticalScale(210),
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(20),
  },
  footerText: {
    fontSize: moderateScale(15),
    color: colors.black,
  },
  footerTextSpam: {
    color: colors.red,
    fontWeight: 'bold',
  },
});

export default styles;
