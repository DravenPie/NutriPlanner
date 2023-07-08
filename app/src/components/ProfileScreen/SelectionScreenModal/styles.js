import { moderateScale, verticalScale } from '@styles/metrics';

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 0,
  },
  container: {
    width: '90%',
    backgroundColor: colors.darkWhite,
    borderRadius: moderateScale(20),
    marginBottom: verticalScale(20),
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(50),
  },
  content: {
    justifyContent: 'center',
  },
  contentLabel: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: moderateScale(14),
  }
});

export default styles;
