import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { debug } from '@styles/utils';

const styles = StyleSheet.create({
  button: {
    width: '95%',
    height: 45,
    backgroundColor: colors.darkGreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 15,
    color: colors.white,
  },
  
  debug: {
    ...debug(false)
  },
});

export default styles;
