import { moderateScale, verticalScale } from '@styles/metrics';

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';

const styles = StyleSheet.create({
  button: {
    width: '95%',
    height: verticalScale(45),
    backgroundColor: colors.darkGreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
  },
  buttonText: {
    fontSize: moderateScale(15),
    color: colors.white,
  },
});

export default styles;
