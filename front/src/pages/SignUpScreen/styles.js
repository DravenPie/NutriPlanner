import { defaultContainer, padding } from '@styles/global';
import { moderateScale, verticalScale } from '@styles/metrics';

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';

const styles = StyleSheet.create({
  container: {
    ...defaultContainer(),
    marginTop: 0,

    backgroundColor: colors.lightGreen,
  },
  header: {
    height: verticalScale(70),
  },
  headerText: {
    fontSize: moderateScale(25),
    color: colors.darkGreen,
  },

  formView: {
    ...padding(0, 0, 40, 0),

    height: verticalScale(550),    
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
