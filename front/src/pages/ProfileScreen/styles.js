import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { defaultContainer } from '@styles/global';
import { moderateScale } from '@styles/metrics';
import { padding } from '@styles/global';

const styles = StyleSheet.create({
  container: {
    ...defaultContainer(),
    marginTop: 0,
    
    backgroundColor: colors.lightGreen,
  },

  view: {
    ...padding(0, 0, 20, 0),
  },
  viewHeader: {
    ...padding(0, 0, 10, 0),
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default styles;
