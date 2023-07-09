import { moderateScale, verticalScale } from '@styles/metrics';

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { padding } from '@styles/global';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: moderateScale(1.5),
    borderColor: colors.lightGrey,
    ...padding(5, 10),
    backgroundColor: colors.white,
    borderRadius: moderateScale(5),
    marginBottom: moderateScale(2),
    justifyContent: 'center',
    height: verticalScale(50),
  },
  labelContainer: {
    width: '30%',
    justifyContent: 'center',
  },
  text: {
    color: colors.black,
    fontSize: moderateScale(12),
  },
  propertiesContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default styles;
