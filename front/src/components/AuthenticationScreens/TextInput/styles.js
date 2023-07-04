import { moderateScale, verticalScale } from '@styles/metrics';

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { padding } from '@styles/global';

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    ...padding(0, 5),
    backgroundColor: colors.white,
    borderRadius: moderateScale(8),
  },
  input: {
    ...padding(0, 5),
    borderRadius: moderateScale(5),
    fontSize: moderateScale(15),
    color: colors.black,
    height: verticalScale(48)
  },
});

export default styles;
