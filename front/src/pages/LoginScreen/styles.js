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
    justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: 25,
    color: colors.darkGreen,
  },

  formView: {
    height: 385,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputIcon: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    ...padding(0),
  },

  footer: {
    height: 195,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 15,
    color: colors.black,
  },
  footerTextSpam: {
    color: colors.red,
    fontWeight: 'bold',
  },

  debug: {
    ...debug(false)
  },
});

export default styles;
