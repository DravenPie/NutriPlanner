import { defaultContainer, padding } from '@styles/global';

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { moderateScale } from 'styles/metrics';

const styles = StyleSheet.create({
  view: {
    ...defaultContainer(),
    
    backgroundColor: colors.lightGreen,
  },
  container: {
    ...padding(0, 0, 20, 0),
  },
  headerText: {
    ...padding(0, 0, 20, 0),
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: colors.black,
  },
  containerHeaderText: {
    ...padding(0, 0, 5, 0),
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: colors.black,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    ...padding(5),
    borderRadius: moderateScale(5),
    borderColor: colors.darkGrey,
    borderWidth: moderateScale(2),
    
    elevation: moderateScale(5),
    shadowColor: colors.black,
  },
  label: {
    color: colors.black,
    fontSize: moderateScale(13),
  },
  value: {
    color: colors.black,
    fontSize: moderateScale(11),
    fontWeight: 'bold',
  }
});

export default styles;
