import { debug, padding } from '@styles/utils';

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    ...padding(0, 5),
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  input: {
    ...padding(0, 5),
    borderRadius: 5,
    fontSize: 15,
    color: colors.black,
    selectionColor: 'grey',
    height: 48
  },

  debug: {
    ...debug(false)
  },
});

export default styles;
