import { moderateScale, verticalScale } from '@styles/metrics';

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { padding } from '@styles/global';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    ...padding(0, 10),
    height: verticalScale(35),
  },
  placeholder: {
    fontSize: moderateScale(14),
    color: colors.darkGrey,
  },
  display: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',    
    width: '40%',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    ...padding(0, 5),
    backgroundColor: colors.darkWhite,
    borderRadius: moderateScale(5),
    height: verticalScale(28)
  },
  displayText: {
    fontSize: moderateScale(14),
    color: colors.black,
    width: '80%',
  }
});

export default styles;
