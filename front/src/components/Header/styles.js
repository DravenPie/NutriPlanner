import { moderateScale, verticalScale } from "styles/metrics";

import { StatusBar } from "react-native"
import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,

    width: '100%',
    height: verticalScale(40),
    backgroundColor: colors.mediumGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
