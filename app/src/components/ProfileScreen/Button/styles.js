import { moderateScale, verticalScale } from '@styles/metrics';

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';

const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: verticalScale(45),
    backgroundColor: colors.mediumBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    marginTop: verticalScale(20),
  },
  buttonText: {
    fontSize: moderateScale(15),
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
