import { setDebug, setDefaultContainer, setPadding } from '@styles/utils';

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';

const styles = StyleSheet.create({
  container: {
    ...setDefaultContainer(),

    backgroundColor: colors.lightGreen,
  },
  header: {
    height: 90,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 25,
    color: colors.darkGreen,
  },

  formView: {
    ...setPadding(40, 0),

    height: 580,    
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputIcon: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    ...setPadding(0),
  },

  debug: {
    ...setDebug(false)
  },
});

export default styles;
