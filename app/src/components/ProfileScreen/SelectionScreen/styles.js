import { defaultContainer, padding } from '@styles/global';
import { moderateScale, verticalScale } from '@styles/metrics';

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';

const styles = StyleSheet.create({
  container: {
    ...defaultContainer(),
    marginTop: 0,
    backgroundColor: colors.white,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    ...padding(0, 0, 10, 0),
    height: verticalScale(70),
  },
  content: {
    width: '80%',
    justifyContent: 'space-between'
  },
  contentLabel: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: moderateScale(14),
  }
});

export default styles;
