import { setDebug, setPadding } from '@styles/utils';

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    ...setPadding(0, 5),
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  input: {
    ...setPadding(0, 5),
    borderRadius: 5,
    fontSize: 15,
    color: colors.black,
    selectionColor: 'grey',
    height: 48
  },

  debug: {
    ...setDebug(false)
  },
});

export default styles;
