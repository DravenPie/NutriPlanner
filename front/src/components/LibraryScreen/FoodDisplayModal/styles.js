import { defaultContainer, padding } from '@styles/global';
import { horizontalScale, moderateScale, verticalScale } from '@styles/metrics';

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    margin: 0,
  },
  container: {
    width: '80%',
    // height: verticalScale(500),
    backgroundColor: colors.white,
    ...padding(15),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.mediumGreen,
    height: verticalScale(50),
    ...padding(0, 10),
    marginBottom: verticalScale(15),
  },
  headerText: {
    width: '85%',
    color: colors.white,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    ...padding(0, 0, 0, 5),
  },
  foodDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...padding(0, 10, 10, 10),
    marginBottom: moderateScale(10),
    borderBottomWidth: moderateScale(1),
  },
  foodDisplayText: {
    color: colors.black,
    fontSize: moderateScale(14),
  },
  foodDisplayInput: {
    width: '40%',
    borderWidth: moderateScale(1),
    paddingTop: 0,
    ...padding(0, 10),
    height: verticalScale(25),
    borderRadius: moderateScale(5),
    borderColor: colors.darkGrey,
  }
});

export default styles;
