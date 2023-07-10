import { moderateScale, verticalScale } from "@styles/metrics";

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { padding } from 'styles/global';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(60),
    backgroundColor: colors.mediumGreen,
    flexDirection: 'row',
    alignItems: 'center',
    ...padding(0, 20)
  },
  text: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: colors.white,
    ...padding(0, 0, 0, 30)
  },
});

export default styles;
