import { debug, defaultContainer, padding } from '@styles/utils';

import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';

const styles = StyleSheet.create({
  container: {
    ...defaultContainer(),

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
    ...padding(40, 0),

    height: 580,    
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputIcon: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    ...padding(0),
  },

  debug: {
    ...debug(false)
  },
});

export default styles;
