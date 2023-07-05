import { moderateScale, verticalScale } from '@styles/metrics';

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: verticalScale(25),
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: moderateScale(14),
    color: colors.mediumBlue,
    fontWeight: 'bold',
  },
});

export default styles;
