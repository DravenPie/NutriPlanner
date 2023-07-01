import { StatusBar, StyleSheet } from 'react-native';
import { setDebug, setMinMaxDimensions, setPadding } from '@styles/utils';

import { colors } from '@styles/colors';

const styles = StyleSheet.create({
  container: {
    ...setMinMaxDimensions(),
    flex: 1,
    marginTop: StatusBar.currentHeight,
    ...setPadding(20),
    backgroundColor: colors.lightGreen,
  },

  header: {
    height: '10%',
    justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: 25,
    color: colors.darkGreen,
  },

  formView: {
    height: '60%',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputIcon: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    ...setPadding(0),
  },

  footer: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 15,
  },
  footerTextSpam: {
    color: colors.red,
    fontWeight: 'bold',
  },

  ...setDebug(false),
});

export default styles;
