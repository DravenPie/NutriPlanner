import { debug, defaultContainer, padding } from '@styles/global';
import { moderateScale, verticalScale } from 'styles/metrics';

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';

const styles = StyleSheet.create({
  container: {
    ...defaultContainer(),

    backgroundColor: colors.lightGreen,
  },
  header: {
    height: verticalScale(90),
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: moderateScale(25),
    color: colors.darkGreen,
  },

  formView: {
    ...padding(40, 0),

    height: verticalScale(580),    
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputIcon: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    ...padding(0),
  },
});

export default styles;
