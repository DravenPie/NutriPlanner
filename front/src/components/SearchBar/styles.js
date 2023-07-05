import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { moderateScale } from '@styles/metrics';
import { padding } from '@styles/global';

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    ...padding(0, 0, 20, 0),
  },
  searchBar: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    borderBottomWidth: moderateScale(1.3),
    borderColor: colors.black,
  },
  Text: {
    color: colors.black,
    fontSize: moderateScale(16),
  }
});

export default styles;
